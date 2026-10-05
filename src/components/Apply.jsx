import { useState } from 'react'
import { applyForm, company, contact } from '../data/content.js'
import Icon from './Icons.jsx'

const digitsOnly = (v) => v.replace(/\D/g, '')
const withCommas = (v) => digitsOnly(v).replace(/^0+(?=\d)/, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const Field = ({ label, hint, children }) => (
  <label className="field">
    <span className="f-label">{label}{hint && <small> {hint}</small>}</span>
    {children}
  </label>
)

export default function Apply() {
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')
  const [loanType, setLoanType] = useState(applyForm.loanTypes[0])
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const isLoan = loanType.toLowerCase().includes('loan')

  function startOver() {
    setStatus('idle')
    try {
      history.replaceState(null, '', '/#apply')
    } catch {
      // Some embedded previews block changing the address.
    }
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.botcheck) return

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          access_key: applyForm.accessKey,
          subject: `New application: ${data['Request type']} — ${data['Full name']}`,
          from_name: `${company.name} website`,
        }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      form.reset()
      setLoanType(applyForm.loanTypes[0])
      setPhone('')
      setAmount('')
      setStatus('sent')
    } catch (err) {
      setErrorMsg(err?.message || '')
      setStatus('error')
    }
  }

  return (
    <section id="apply" className="section apply">
      <div className="apply-intro">
        <h2 className="h2">Apply online</h2>
        <p className="lead">
          Tell us a little about what you need. An officer will call you to talk it through and explain the documents
          required. There is no charge for applying.
        </p>
        <p className="apply-note">
          Please do not send ID numbers, bank statements or other documents here. We will collect those securely when we
          meet you.
        </p>
      </div>

      {status === 'sent' ? (
        <div className="apply-done" role="status">
          <span className="done-icon"><Icon name="check" strokeWidth={2.4} /></span>
          <h3>Application sent</h3>
          <p>{applyForm.thankYou}</p>
          <button type="button" className="btn btn-green" onClick={startOver}>Send another application</button>
        </div>
      ) : (
        <form className="apply-form" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <Field label="Full name">
            <input name="Full name" required autoComplete="name" />
          </Field>
          <Field label="Phone number">
            <input
              name="Phone"
              type="tel"
              inputMode="numeric"
              required
              autoComplete="tel"
              placeholder="e.g. 0758880388"
              maxLength={10}
              pattern="\d{10}"
              title="Enter a 10-digit phone number, e.g. 0758880388"
              value={phone}
              onChange={(e) => setPhone(digitsOnly(e.target.value).slice(0, 10))}
            />
          </Field>
          <Field label="Email" hint="(optional)">
            <input name="email" type="email" autoComplete="email" />
          </Field>
          <Field label="What do you need?">
            <select name="Request type" value={loanType} onChange={(e) => setLoanType(e.target.value)}>
              {applyForm.loanTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>

          {isLoan && (
            <>
              <Field label="Amount needed (UGX)">
                <input
                  name="Amount (UGX)"
                  inputMode="numeric"
                  required
                  placeholder="e.g. 1,500,000"
                  value={amount}
                  onChange={(e) => setAmount(withCommas(e.target.value))}
                />
              </Field>
              <Field label="Repayment period">
                <select name="Repayment period">
                  {applyForm.periods.map((p) => <option key={p}>{p}</option>)}
                </select>
              </Field>
            </>
          )}

          <Field label="Business or occupation">
            <input name="Business / occupation" required placeholder="e.g. retail shop, teacher, boda boda" />
          </Field>
          <Field label="Best time to call">
            <select name="Best time to call">
              {applyForm.contactTimes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
          <Field label={isLoan ? 'What will the loan be used for?' : 'Tell us about your needs'}>
            <textarea name="Details" rows={4} required />
          </Field>

          <label className="consent">
            <input type="checkbox" name="Consent" value="Yes" required />
            <span>
              I agree that {company.fullName} may contact me and use these details only to process my request.
            </span>
          </label>

          {status === 'error' && (
            <p className="apply-error" role="alert">
              Sorry, your application could not be sent. Please try again, or call us on{' '}
              <a href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a>.
              {errorMsg && <small className="apply-error-detail">Reason: {errorMsg}</small>}
            </p>
          )}

          <button className="btn btn-red" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit application'}
          </button>
        </form>
      )}
    </section>
  )
}
