'use client'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main style={{minHeight:'100vh',background:'#030712',display:'flex',alignItems:'center',justifyContent:'center',padding:'20px'}}>
      <div style={{background:'#111827',padding:'32px',borderRadius:'16px',width:'100%',maxWidth:'400px'}}>
        <h1 style={{color:'white',fontSize:'24px',fontWeight:'bold',marginBottom:'8px'}}>Login to SOVIXA</h1>
        <p style={{color:'#9ca3af',marginBottom:'24px'}}>Welcome back</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          style={{width:'100%',background:'#1f2937',color:'white',padding:'12px',borderRadius:'8px',border:'none',marginBottom:'12px',boxSizing:'border-box'}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          style={{width:'100%',background:'#1f2937',color:'white',padding:'12px',borderRadius:'8px',border:'none',marginBottom:'24px',boxSizing:'border-box'}}
        />
        <button style={{width:'100%',background:'#6366f1',color:'white',padding:'12px',borderRadius:'8px',border:'none',fontWeight:'600',fontSize:'16px',cursor:'pointer'}}>
          Login
        </button>
        <p style={{color:'#6b7280',textAlign:'center',marginTop:'16px'}}>
          No account? <a href="/auth/signup" style={{color:'#6366f1'}}>Sign up free</a>
        </p>
      </div>
    </main>
  )
}
