'use client'
import { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shopType, setShopType] = useState('')
  const [shopName, setShopName] = useState('')

  return (
    <main style={{minHeight:'100vh',background:'#030712',display:'flex',alignItems:'center',justifyContent:'center',padding:'20px'}}>
      <div style={{background:'#111827',padding:'32px',borderRadius:'16px',width:'100%',maxWidth:'400px'}}>
        <h1 style={{color:'white',fontSize:'24px',fontWeight:'bold',marginBottom:'8px'}}>Start Free Trial</h1>
        <p style={{color:'#9ca3af',marginBottom:'24px'}}>14 days free • No card needed</p>
        <input
          type="text"
          placeholder="Shop Name"
          value={shopName}
          onChange={e=>setShopName(e.target.value)}
          style={{width:'100%',background:'#1f2937',color:'white',padding:'12px',borderRadius:'8px',border:'none',marginBottom:'12px',boxSizing:'border-box'}}
        />
        <div style={{display:'flex',gap:'12px',marginBottom:'12px'}}>
          <button
            onClick={()=>setShopType('kirana')}
            style={{flex:1,padding:'12px',borderRadius:'8px',border:'none',cursor:'pointer',background:shopType==='kirana'?'#6366f1':'#1f2937',color:'white',fontWeight:'600'}}
          >🛒 Kirana</button>
          <button
            onClick={()=>setShopType('medical')}
            style={{flex:1,padding:'12px',borderRadius:'8px',border:'none',cursor:'pointer',background:shopType==='medical'?'#6366f1':'#1f2937',color:'white',fontWeight:'600'}}
          >💊 Medical</button>
        </div>
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
          Start Free Trial
        </button>
        <p style={{color:'#6b7280',textAlign:'center',marginTop:'16px'}}>
          Have account? <a href="/auth/login" style={{color:'#6366f1'}}>Login</a>
        </p>
      </div>
    </main>
  )
          }
