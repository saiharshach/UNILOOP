import React from 'react'
import './Hero.css'
import walking from '../Assets/group1.jpg'
import sitting from '../Assets/group2.jpg'
import chatting from '../Assets/group3.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>WHAT'S UNILOOP?</h2>
            <div>
                <div className="hand-hand-icon">
                    <img src={walking} alt="Buy and Sell" />
                    <div className='hero-text'>
                        <h1>Buy and Sell</h1>
                        <p>
                        UniLoop is a campus-exclusive platform built by students, for students. Our mission?
                        To connect you with other students on your campus to buy and sell second-hand items in a way that's safe, sustainable, and super simple.
                        We’re building a circular economy that reduces student waste and makes student life more affordable.
                        </p>
                    </div>
                    </div>

                    <div className='working'>
                    <div>
                        <h1>How it works?</h1>
                        <p><strong>1. Sign Up:</strong> Verify your student email to join your campus market.</p>
                        <p><strong>2. List or Browse:</strong> Post items you no longer need or explore categories tailored to student life.</p>
                        <p><strong>3. Connect & Chat:</strong> Message buyers or sellers directly to ask questions or negotiate.</p>
                        <p><strong>4. Meet & Complete:</strong> Meet up safely on campus and share the verification code to finalize the transaction.</p>
                    </div>
                    <img src={sitting} alt="How it works" />
                    </div>

                    <div className='made-by'>
                    <img src={chatting} alt="Made by students" />
                    <div>
                        <h1>Made by students, for students</h1>
                        <p><strong>🔍 Find a Compatible Buyer or Seller:</strong><br />
                        Trade with students who get what you need.
                        Skip the hassle — connect with like-minded peers instantly.</p>
                        <p><strong>📍 Safe and Local Transactions:</strong><br />
                        Verified users. Trusted deals.
                        Meet on campus, no strangers, no stress.</p>
                        <p><strong>♻️ Promote Sustainability:</strong><br />
                        Give your items a second life.
                        Declutter, earn, and help reduce campus waste.</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
    )
}

export default Hero