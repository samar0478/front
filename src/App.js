import React, { useState, useEffect } from 'react';
import './App.css';
import OfflineIndicator from './components/OfflineIndicator';
import InstallPrompt from './components/InstallPrompt';
import useServiceWorker from './hooks/useServiceWorker';

// Enhanced Content Data with Beautiful Essential Skills Navigation
const SAMPLE_CONTENT = {
  en: {
    siteName: "Coding Guide",
    subtitle: "Learn Computer Science the Fun Way!",
    tagline: "Empowering Grade 9 & 10 students with essential CS knowledge",
    startGrade9: "Start Grade 9",
    startGrade10: "Start Grade 10",
    startEssentials: "Essential Skills",
    about: "About",
    search: "Search lessons...",
    previous: "← Previous",
    next: "Next →",
    downloadPdf: "📄 Download PDF",
    progressText: "Your Progress",
    darkMode: "🌙",
    lightMode: "☀️",
    grades: {
      grade9: {
        title: "Grade 9 Computer Science",
        topics: [
          {
            id: "intro",
            title: "📱 Introduction to Computers", 
            icon: "💻",
            lessons: [
              {
                id: "what-is-computer",
                title: "What is a Computer?",
                content: `
                  <h2>What is a Computer? 🖥️</h2>
                  <p>A computer is an electronic device that processes data according to a set of instructions called programs.</p>
                  
                  <h3>Key Characteristics:</h3>
                  <ul>
                    <li><strong>Speed:</strong> Computers can perform millions of calculations per second</li>
                    <li><strong>Accuracy:</strong> Computers rarely make mistakes when programmed correctly</li>
                    <li><strong>Storage:</strong> Can store vast amounts of information</li>
                    <li><strong>Automation:</strong> Can work without human intervention</li>
                  </ul>

                  <h3>Types of Computers:</h3>
                  <ol>
                    <li><strong>Personal Computers (PC)</strong> - Desktop and laptop computers</li>
                    <li><strong>Servers</strong> - Powerful computers that serve many users</li>
                    <li><strong>Supercomputers</strong> - Extremely fast computers for complex calculations</li>
                    <li><strong>Embedded Systems</strong> - Computers built into other devices</li>
                  </ol>

                  <div class="fun-fact">
                    💡 <strong>Fun Fact:</strong> The first computer ENIAC weighed 30 tons and took up an entire room!
                  </div>
                `
              },
              
            ]
          },
          {
            id: "hardware",
            title: "🔧 Computer Hardware",
            icon: "⚙️", 
            lessons: [
              {
                id: "input-devices",
                title: "Input Devices",
                content: `
                  <h2>Input Devices 🎯</h2>
                  <p>Input devices allow users to enter data and commands into a computer system.</p>

                  <h3>Common Input Devices:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>⌨️ Keyboard</h4>
                      <ul>
                        <li>Primary text input device</li>
                        <li>QWERTY layout most common</li>
                        <li>Special function keys (F1-F12)</li>
                      </ul>
                    </div>  
                `
              },
              {
                id: "output-devices", 
                title: "Output Devices",
                content: `
                  <h2>Output Devices 📺</h2>
                  <p>Output devices display or present information from the computer to users.</p>

                  <h3>Visual Output Devices:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>🖥️ Monitor</h4>
                      <ul>
                        <li>Primary visual output</li>
                        <li>LCD, LED, OLED technologies</li>
                        <li>Various resolutions: HD, 4K, 8K</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>📽️ Projector</h4>
                      <ul>
                        <li>Large screen display</li>
                        <li>Presentations and movies</li>
                        <li>DLP or LCD technology</li>
                      </ul>
                    </div>
                  </div>

                `
              }
            ]
          }
        ]
      },
      grade10: {
        title: "Grade 10 Computer Science",
        topics: [
          {
            id: "programming",
            title: "💻 Introduction to Programming",
            icon: "🐍",
            lessons: [
              {
                id: "what-is-programming",
                title: "What is Programming?",
                content: `
                  <h2>What is Programming? 👨‍💻</h2>
                  <p>Programming is the process of creating instructions for computers to solve problems and perform tasks.</p>

                  <h3>Key Concepts:</h3>
                  <ul>
                    <li><strong>Algorithm:</strong> Step-by-step solution to a problem</li>
                    <li><strong>Code:</strong> Instructions written in a programming language</li>
                    <li><strong>Program:</strong> Complete set of instructions</li>
                    <li><strong>Bug:</strong> Error in the code</li>
                    <li><strong>Debug:</strong> Process of finding and fixing bugs</li>
                  </ul>

                  <h3>Popular Programming Languages:</h3>
                  
                  <div class="language-grid">
                    <div class="language">
                      <h4>🐍 Python</h4>
                      <p>Great for beginners, used in AI and web development</p>
                    </div>
                    
                    <div class="language">
                      <h4>☕ Java</h4>
                      <p>Object-oriented, used in enterprise applications</p>
                    </div>
                    
                    <div class="language">
                      <h4>🌐 JavaScript</h4>
                      <p>Essential for web development and interactivity</p>
                    </div>
                    
                    <div class="language">
                      <h4>⚡ C++</h4>
                      <p>Fast and powerful, used in games and systems</p>
                    </div>
                  </div>

                  <h3>Programming Process:</h3>
                  <ol>
                    <li><strong>Problem Analysis:</strong> Understand what needs to be solved</li>
                    <li><strong>Algorithm Design:</strong> Plan the solution steps</li>
                    <li><strong>Coding:</strong> Write the program</li>
                    <li><strong>Testing:</strong> Check if it works correctly</li>
                    <li><strong>Debugging:</strong> Fix any errors</li>
                    <li><strong>Documentation:</strong> Explain how it works</li>
                  </ol>

                  <h3>🎯 Simple Python Example:</h3>
                  <div class="code-example">
                    <pre><code>
# This program greets the user
name = input("What's your name? ")
print(f"Hello, {name}! Welcome to programming!")
                    </code></pre>
                  </div>
                `
              },
             
            ]
          }
        ]
      },
      essentials: {
        title: "Essential Skills & Life Hacks",
        topics: [
          {
            id: "smart-life-skills",
            title: "🧠 Smart Life Skills",
            icon: "💡",
            description: "Useful hacks that students will wish they knew earlier",
            lessons: [
              {
                id: "gas-cylinder-check",
                title: "How to check if a gas cylinder is expired",
                content: `
                  <h2>How to Check if a Gas Cylinder is Expired 🔥</h2>
                  <p>Every gas cylinder has an expiry date that you should check regularly for safety.</p>
                  
                  <div class="safety-warning">
                    ⚠️ <strong>Safety First:</strong> Using expired gas cylinders can be extremely dangerous!
                  </div>

                  <h3>Step-by-Step Guide:</h3>
                  <ol>
                    <li><strong>Look for the Date Ring:</strong> Find the metal ring around the neck of the cylinder</li>
                    <li><strong>Check the Stamped Date:</strong> Look for numbers like "03/2024" (Month/Year)</li>
                    <li><strong>Calculate Expiry:</strong> Add 15 years to manufacturing date for steel cylinders</li>
                    <li><strong>Check for Damage:</strong> Look for dents, rust, or any physical damage</li>
                  </ol>

                  <h3>Warning Signs:</h3>
                  <ul>
                    <li>🔴 Rust or corrosion on the cylinder</li>
                    <li>🔴 Dents or physical damage</li>
                    <li>🔴 Smell of gas when valve is closed</li>
                    <li>🔴 Difficulty in connecting regulator</li>
                  </ul>

                  <div class="pro-tip">
                    💡 <strong>Pro Tip:</strong> Always buy from authorized dealers and keep your purchase receipt!
                  </div>
                `
              },
              {
                id: "boil-water-safely",
                title: "How to boil water and store it safely",
                content: `
                  <h2>How to Boil Water and Store it Safely 🫧</h2>
                  <p>Proper water boiling and storage is crucial for health, especially during monsoon season.</p>

                  <h3>Boiling Process:</h3>
                  <ol>
                    <li><strong>Use Clean Pot:</strong> Wash your pot with soap before use</li>
                    <li><strong>Fill with Water:</strong> Use the cleanest water source available</li>
                    <li><strong>Bring to Rolling Boil:</strong> Water should bubble vigorously for 1-3 minutes</li>
                    <li><strong>Let it Cool:</strong> Allow to cool naturally, don't add ice</li>
                  </ol>

                  <h3>Safe Storage:</h3>
                  <ul>
                    <li>🧽 Use clean, covered containers</li>
                    <li>❄️ Store in cool, dark places</li>
                    <li>🕐 Use within 24 hours for best quality</li>
                    <li>🚫 Never store in metal containers for long periods</li>
                  </ul>

                  <div class="health-tip">
                    🏥 <strong>Health Tip:</strong> Boiled water prevents waterborne diseases like diarrhea and typhoid!
                  </div>
                `
              },
              {
                id: "electric-shock-response",
                title: "What to do when someone gets an electric shock",
                content: `
                  <h2>What to Do When Someone Gets an Electric Shock ⚡</h2>
                  <p>Electric shock can be life-threatening. Quick and proper response can save lives.</p>

                  <div class="emergency-warning">
                    🚨 <strong>EMERGENCY:</strong> Call 102 (ambulance) immediately for serious shocks!
                  </div>

                  <h3>Immediate Steps:</h3>
                  <ol>
                    <li><strong>DON'T TOUCH the person directly!</strong></li>
                    <li><strong>Turn off power source</strong> if possible (switch/main breaker)</li>
                    <li><strong>Use non-conductive object</strong> (dry wood, plastic) to move person</li>
                    <li><strong>Check breathing and pulse</strong></li>
                    <li><strong>Call for medical help</strong> immediately</li>
                  </ol>

                  <h3>What NOT to do:</h3>
                  <ul>
                    <li>❌ Don't touch the person with bare hands</li>
                    <li>❌ Don't use wet or metal objects</li>
                    <li>❌ Don't move the person unnecessarily</li>
                    <li>❌ Don't give water or food</li>
                  </ul>

                  <h3>Prevention:</h3>
                  <ul>
                    <li>🔌 Don't touch electrical appliances with wet hands</li>
                    <li>🔧 Get faulty wiring fixed immediately</li>
                    <li>⚡ Use proper earthing for heavy appliances</li>
                  </ul>
                `
              },
              {
                id: "earthquake-safety",
                title: "What to do in an earthquake (Nepal-focused)",
                content: `
                  <h2>What to do in an Earthquake (Nepal-focused) 🏔️</h2>
                  <p>Nepal is earthquake-prone. Knowing what to do can save your life and others.</p>

                  <h3>During the Earthquake:</h3>
                  <ol>
                    <li><strong>DROP:</strong> Get on hands and knees</li>
                    <li><strong>COVER:</strong> Hide under strong desk/table</li>
                    <li><strong>HOLD ON:</strong> Grip your shelter and protect your head</li>
                    <li><strong>Stay where you are</strong> until shaking stops</li>
                  </ol>

                  <h3>If You're Indoors:</h3>
                  <ul>
                    <li>🏠 Stay inside, don't run outside</li>
                    <li>🚪 Stay away from windows and doors</li>
                    <li>🛗 Don't use elevators</li>
                    <li>⛪ Be careful of falling objects</li>
                  </ul>

                  <h3>If You're Outdoors:</h3>
                  <ul>
                    <li>🌳 Stay away from buildings, trees, power lines</li>
                    <li>🏔️ Be aware of landslides in hilly areas</li>
                    <li>🚗 If driving, stop safely and stay in car</li>
                  </ul>

                  <h3>After the Earthquake:</h3>
                  <ul>
                    <li>📱 Check for injuries and call 100/102 if needed</li>
                    <li>🔍 Check for gas leaks, electrical damage</li>
                    <li>📻 Listen to radio for official updates</li>
                    <li>💧 Store water and food supplies</li>
                  </ul>

                  <div class="nepal-tip">
                    🇳🇵 <strong>Nepal Emergency Numbers:</strong> Police: 100, Fire: 101, Ambulance: 102
                  </div>
                `
              },
              {
                id: "fake-currency-detection",
                title: "How to identify fake Rs.1000 and Rs.500 notes",
                content: `
                  <h2>How to Identify Fake Rs.1000 and Rs.500 Notes 💸</h2>
                  <p>Learn to spot fake Nepali currency to protect yourself from fraud.</p>

                  <h3>Rs. 1000 Note Security Features:</h3>
                  <ul>
                    <li>🔍 <strong>Watermark:</strong> Clear image of Mount Everest when held to light</li>
                    <li>✨ <strong>Security Thread:</strong> Embedded thread with "NRB" text</li>
                    <li>🎨 <strong>Color Changing Ink:</strong> Denomination changes color when tilted</li>
                    <li>📏 <strong>Microprinting:</strong> Tiny text visible under magnification</li>
                    <li>🖼️ <strong>Raised Printing:</strong> Feel the texture, genuine notes feel raised</li>
                  </ul>

                  <h3>Rs. 500 Note Security Features:</h3>
                  <ul>
                    <li>🏔️ <strong>Watermark:</strong> Tiger head visible when held to light</li>
                    <li>🔒 <strong>Security Thread:</strong> Vertical thread with "Nepal Rastra Bank"</li>
                    <li>🌈 <strong>Color Changing Ink:</strong> Number 500 changes from green to blue</li>
                    <li>🔍 <strong>See-through Register:</strong> Perfect alignment when held to light</li>
                  </ul>

                  <h3>Quick Check Method:</h3>
                  <ol>
                    <li><strong>Feel:</strong> Genuine notes have a unique texture</li>
                    <li><strong>Look:</strong> Check watermark against light</li>
                    <li><strong>Tilt:</strong> See if colors change</li>
                    <li><strong>Compare:</strong> With a note you know is genuine</li>
                  </ol>

                  <div class="warning-tip">
                    ⚠️ <strong>Warning:</strong> If you receive a fake note, report to police immediately. Don't try to use it!
                  </div>
                `
              }
            ]
          },
          {
            id: "tech-tricks",
            title: "📱 Tech Tricks You'll Actually Use",
            icon: "🔧",
            description: "Everyday tech survival - smart phone, smarter student",
            lessons: [
              {
                id: "delete-facebook-permanently",
                title: "How to delete a Facebook account permanently",
                content: `
                  <h2>How to Delete a Facebook Account Permanently 📱</h2>
                  <p>If you want to permanently remove your Facebook account, follow these steps carefully.</p>

                  <div class="warning-tip">
                    ⚠️ <strong>Warning:</strong> This action cannot be undone! Make sure you really want to delete your account.
                  </div>

                  <h3>Before You Delete:</h3>
                  <ul>
                    <li>📥 Download your data (photos, posts, messages)</li>
                    <li>📞 Inform friends of alternative contact methods</li>
                    <li>🔗 Unlink Facebook from other apps/websites</li>
                    <li>💳 Cancel any Facebook-linked subscriptions</li>
                  </ul>

                  <h3>Deletion Steps:</h3>
                  <ol>
                    <li><strong>Log into Facebook</strong> on a computer or mobile browser</li>
                    <li><strong>Go to Settings & Privacy</strong> → Settings</li>
                    <li><strong>Click "Your Facebook Information"</strong></li>
                    <li><strong>Select "Deactivation and Deletion"</strong></li>
                    <li><strong>Choose "Delete Account"</strong> and click Continue</li>
                    <li><strong>Enter your password</strong> and click Continue</li>
                    <li><strong>Click "Delete Account"</strong></li>
                  </ol>

                  <h3>What Happens Next:</h3>
                  <ul>
                    <li>⏰ Account enters 30-day grace period</li>
                    <li>🚫 Don't log in during this time or deletion cancels</li>
                    <li>🗑️ After 30 days, account and data are permanently deleted</li>
                  </ul>

                  <div class="pro-tip">
                    💡 <strong>Alternative:</strong> Consider deactivation first if you're unsure about permanent deletion.
                  </div>
                `
              },
              {
                id: "disable-location-tracking",
                title: "How to turn off location tracking in your phone",
                content: `
                  <h2>How to Turn Off Location Tracking in Your Phone 📍</h2>
                  <p>Protect your privacy by controlling location access for apps and services.</p>

                  <h3>For Android Phones:</h3>
                  <ol>
                    <li><strong>Open Settings</strong> app</li>
                    <li><strong>Go to "Location"</strong> or "Privacy"</li>
                    <li><strong>Turn off "Use location"</strong> toggle</li>
                    <li><strong>Or manage per app:</strong> Tap "App permissions"</li>
                    <li><strong>Select specific apps</strong> and change permissions</li>
                  </ol>

                  <h3>For iPhone:</h3>
                  <ol>
                    <li><strong>Open Settings</strong> app</li>
                    <li><strong>Tap "Privacy & Security"</strong></li>
                    <li><strong>Select "Location Services"</strong></li>
                    <li><strong>Turn off completely</strong> or manage per app</li>
                    <li><strong>Scroll down</strong> for system services</li>
                  </ol>

                  <h3>Google Account Settings:</h3>
                  <ul>
                    <li>🌐 Go to myaccount.google.com</li>
                    <li>📍 Click "Data & Privacy"</li>
                    <li>🗺️ Find "Location History" and turn off</li>
                    <li>📱 Turn off "Web & App Activity"</li>
                  </ul>

                  <h3>What You Should Know:</h3>
                  <ul>
                    <li>📱 Some apps need location for core functionality</li>
                    <li>🗺️ Maps, weather, and ride-sharing apps work better with location</li>
                    <li>🔋 Turning off location can improve battery life</li>
                    <li>📸 Photo location tags will stop working</li>
                  </ul>

                  <div class="privacy-tip">
                    🔒 <strong>Privacy Tip:</strong> Review location permissions regularly - many apps don't really need it!
                  </div>
                `
              }
            ]
          },
          {
            id: "home-hacks",
            title: "🧼 Home Hacks for Students",
            icon: "🏠",
            description: "Things to protect you, your phone, your home, and your health",
            lessons: [
              {
                id: "fix-phone-charging",
                title: "How to fix weak phone charging (dust removal trick)",
                content: `
                  <h2>How to Fix Weak Phone Charging (Dust Removal Trick) 🔌</h2>
                  <p>If your phone charges slowly or won't charge, the problem might be dust in the charging port.</p>

                  <h3>What You'll Need:</h3>
                  <ul>
                    <li>🧹 Soft toothbrush (clean and dry)</li>
                    <li>🔦 Flashlight or phone torch</li>
                    <li>💨 Compressed air (optional)</li>
                    <li>🧽 Cotton swab</li>
                  </ul>

                  <h3>Step-by-Step Cleaning:</h3>
                  <ol>
                    <li><strong>Turn off your phone</strong> completely</li>
                    <li><strong>Use flashlight</strong> to look inside charging port</li>
                    <li><strong>Gently brush</strong> with toothbrush in one direction</li>
                    <li><strong>Blow out debris</strong> with compressed air</li>
                    <li><strong>Use cotton swab</strong> for stubborn dirt</li>
                    <li><strong>Test charging</strong> after cleaning</li>
                  </ol>

                  <h3>What NOT to Use:</h3>
                  <ul>
                    <li>❌ Metal objects (paperclips, needles)</li>
                    <li>❌ Water or any liquids</li>
                    <li>❌ Vacuum cleaners (too powerful)</li>
                    <li>❌ Sharp objects that can damage contacts</li>
                  </ul>

                  <h3>Prevention Tips:</h3>
                  <ul>
                    <li>🔌 Use a case that covers the charging port</li>
                    <li>👖 Keep phone in separate pocket from keys/coins</li>
                    <li>🧹 Clean charging port monthly</li>
                    <li>🏠 Store in clean, dust-free places</li>
                  </ul>

                  <div class="pro-tip">
                    💡 <strong>Pro Tip:</strong> If cleaning doesn't help, the charging cable or adapter might be faulty!
                  </div>
                `
              }
            ]
          },
          {
            id: "money-smarts",
            title: "💸 Money Smarts for Students",
            icon: "💰",
            description: "Teach them money sense while they're young",
            lessons: [
              {
                id: "esewa-safety",
                title: "What is eSewa and how to use it safely",
                content: `
                  <h2>What is eSewa and How to Use it Safely 💳</h2>
                  <p>eSewa is Nepal's popular digital wallet. Learn to use it safely and smartly.</p>

                  <h3>What is eSewa?</h3>
                  <ul>
                    <li>💱 Digital wallet for online payments</li>
                    <li>📱 Mobile app for transactions</li>
                    <li>🏪 Pay bills, shop online, transfer money</li>
                    <li>🇳🇵 Licensed by Nepal Rastra Bank</li>
                  </ul>

                  <h3>Safety Tips:</h3>
                  <ol>
                    <li><strong>Strong Password:</strong> Use unique, complex password</li>
                    <li><strong>Don't Share:</strong> Never share login details with anyone</li>
                    <li><strong>Official App:</strong> Download only from Play Store/App Store</li>
                    <li><strong>Secure Network:</strong> Don't use public WiFi for transactions</li>
                    <li><strong>Log Out:</strong> Always log out after use</li>
                  </ol>

                  <h3>Common Scams to Avoid:</h3>
                  <ul>
                    <li>🚫 Fake apps asking for eSewa login</li>
                    <li>📞 Calls asking for OTP or PIN</li>
                    <li>💰 Too-good-to-be-true investment schemes</li>
                    <li>🎁 Fake cashback offers via SMS</li>
                  </ul>

                  <h3>Smart Usage:</h3>
                  <ul>
                    <li>💵 Keep only necessary amount in wallet</li>
                    <li>📊 Check transaction history regularly</li>
                    <li>🧾 Save receipts for important transactions</li>
                    <li>📱 Enable transaction notifications</li>
                  </ul>

                  <div class="safety-tip">
                    🔒 <strong>Remember:</strong> eSewa will NEVER ask for your password or PIN over phone/SMS!
                  </div>
                `
              }
            ]
          },
          {
            id: "emergency-safety",
            title: "🆘 Emergency & Safety Zone",
            icon: "🚨",
            description: "The content that might literally save their life one day",
            lessons: [
              {
                id: "fainting-response",
                title: "What to do when someone faints",
                content: `
                  <h2>What to Do When Someone Faints 😵</h2>
                  <p>Fainting (syncope) is temporary loss of consciousness. Quick action can help the person recover safely.</p>

                  <h3>Immediate Response:</h3>
                  <ol>
                    <li><strong>Check responsiveness:</strong> Gently shake and call their name</li>
                    <li><strong>Position safely:</strong> If unconscious, lay them flat</li>
                    <li><strong>Elevate legs:</strong> Raise legs 8-12 inches if possible</li>
                    <li><strong>Loosen clothing:</strong> Unbutton tight clothes around neck</li>
                    <li><strong>Check breathing:</strong> Ensure airways are clear</li>
                  </ol>

                  <h3>When They Wake Up:</h3>
                  <ul>
                    <li>🧘 Keep them lying down for a few minutes</li>
                    <li>💧 Offer water if they can swallow safely</li>
                    <li>🍯 Give sugar/glucose if available</li>
                    <li>🌬️ Ensure fresh air circulation</li>
                  </ul>

                  <h3>Call for Help If:</h3>
                  <ul>
                    <li>🚨 Person doesn't wake up within 2 minutes</li>
                    <li>💓 No pulse or breathing</li>
                    <li>🤕 They hit their head while falling</li>
                    <li>🩸 There's bleeding or injury</li>
                    <li>🔄 They faint again</li>
                  </ul>

                  <h3>Common Causes:</h3>
                  <ul>
                    <li>🍽️ Low blood sugar (hunger)</li>
                    <li>🌡️ Heat exhaustion</li>
                    <li>💧 Dehydration</li>
                    <li>😰 Emotional shock or stress</li>
                    <li>🩸 Sudden blood pressure drop</li>
                  </ul>

                  <div class="emergency-tip">
                    🚨 <strong>Emergency Numbers Nepal:</strong> Ambulance: 102, Police: 100
                  </div>
                `
              }
            ]
          },
          {
            id: "diy-corner",
            title: "⚙️ Fix It Yourself (DIY Corner)",
            icon: "🔧",
            description: "Show them they can solve problems - confidence boost",
            lessons: [
              {
                id: "phone-stand-diy",
                title: "How to make a phone stand from paper/cardboard",
                content: `
                  <h2>How to Make a Phone Stand from Paper/Cardboard 📱</h2>
                  <p>Create a useful phone stand with materials you have at home!</p>

                  <h3>What You'll Need:</h3>
                  <ul>
                    <li>📄 Thick cardboard or several sheets of paper</li>
                    <li>✂️ Scissors</li>
                    <li>📏 Ruler</li>
                    <li>✏️ Pencil</li>
                    <li>🖇️ Tape or glue</li>
                  </ul>

                  <h3>Simple Triangle Stand:</h3>
                  <ol>
                    <li><strong>Cut rectangle:</strong> 6 inches wide, 4 inches tall</li>
                    <li><strong>Mark fold lines:</strong> 2 inches from each end</li>
                    <li><strong>Cut slot:</strong> 1/4 inch wide, 1 inch deep in center</li>
                    <li><strong>Fold triangles:</strong> Create supporting legs</li>
                    <li><strong>Test angle:</strong> Adjust for your phone size</li>
                  </ol>

                  <h3>Advanced Adjustable Stand:</h3>
                  <ol>
                    <li><strong>Cut base:</strong> 8×6 inch rectangle</li>
                    <li><strong>Cut support:</strong> 6×4 inch rectangle with angle cut</li>
                    <li><strong>Create hinges:</strong> Use tape for adjustable angles</li>
                    <li><strong>Add phone groove:</strong> Cut shallow groove for phone</li>
                  </ol>

                  <h3>Decoration Ideas:</h3>
                  <ul>
                    <li>🎨 Cover with decorative paper</li>
                    <li>✨ Add stickers or drawings</li>
                    <li>🌈 Paint with watercolors</li>
                    <li>📰 Use newspaper for vintage look</li>
                  </ul>

                  <div class="diy-tip">
                    💡 <strong>DIY Tip:</strong> Test with different phone sizes and cases before final assembly!
                  </div>
                `
              }
            ]
          }
        ]
      }
    }
  },
  np: {
    siteName: "कोडिङ गाइड",
    subtitle: "कम्प्युटर विज्ञान मजाले सिक्नुहोस्!",
    tagline: "कक्षा ९ र १० का विद्यार्थीहरूलाई आवश्यक CS ज्ञान प्रदान गर्दै",
    startGrade9: "कक्षा ९ सुरु गर्नुहोस्",
    startGrade10: "कक्षा १० सुरु गर्नुहोस्",
    startEssentials: "आवश्यक सीपहरू",
    about: "बारेमा",
    search: "पाठहरू खोज्नुहोस्...",
    previous: "← अघिल्लो",
    next: "अर्को →",
    downloadPdf: "📄 PDF डाउनलोड",
    progressText: "तपाईंको प्रगति",
    darkMode: "🌙",
    lightMode: "☀️",
    grades: {
      grade9: {
        title: "कक्षा ९ कम्प्युटर विज्ञान",
        topics: [
          {
            id: "intro",
            title: "📱 कम्प्युटरको परिचय", 
            icon: "💻",
            lessons: [
              {
                id: "what-is-computer",
                title: "कम्प्युटर के हो?",
                content: `
                  <h2>कम्प्युटर के हो? 🖥️</h2>
                  <p>कम्प्युटर एक इलेक्ट्रोनिक उपकरण हो जसले प्रोग्राम भनिने निर्देशनहरू अनुसार डाटा प्रक्रिया गर्छ।</p>
                  
                  <h3>मुख्य विशेषताहरू:</h3>
                  <ul>
                    <li><strong>गति:</strong> कम्प्युटरले प्रति सेकेन्ड लाखौं गणना गर्न सक्छ</li>
                    <li><strong>शुद्धता:</strong> सही प्रोग्राम गर्दा कम्प्युटरले विरलै गल्ती गर्छ</li>
                    <li><strong>भण्डारण:</strong> ठूलो मात्रामा जानकारी भण्डारण गर्न सक्छ</li>
                    <li><strong>स्वचालन:</strong> मानव हस्तक्षेप बिना काम गर्न सक्छ</li>
                  </ul>
                `
              }
            ]
          }
        ]
      },
      grade10: {
        title: "कक्षा १० कम्प्युटर विज्ञान",
        topics: [
          {
            id: "programming",
            title: "💻 प्रोग्रामिङको परिचय",
            icon: "🐍",
            lessons: [
              {
                id: "what-is-programming",
                title: "प्रोग्रामिङ के हो?",
                content: `
                  <h2>प्रोग्रामिङ के हो? 👨‍💻</h2>
                  <p>प्रोग्रामिङ भनेको कम्प्युटरका लागि समस्या समाधान र कार्यहरू सम्पादन गर्न निर्देशनहरू सिर्जना गर्ने प्रक्रिया हो।</p>
                `
              }
            ]
          }
        ]
      },
      essentials: {
        title: "आवश्यक सीपहरू र जीवन युक्तिहरू",
        topics: [
          {
            id: "smart-life-skills",
            title: "🧠 स्मार्ट जीवन सीपहरू",
            icon: "💡",
            description: "विद्यार्थीहरूले पहिले जान्न चाहने उपयोगी युक्तिहरू",
            lessons: [
              {
                id: "gas-cylinder-check",
                title: "ग्यास सिलिन्डर म्याद सकिएको छ कि छैन कसरी जाँच्ने",
                content: `
                  <h2>ग्यास सिलिन्डर म्याद सकिएको छ कि छैन कसरी जाँच्ने 🔥</h2>
                  <p>हरेक ग्यास सिलिन्डरको म्याद मिति हुन्छ जुन तपाईंले सुरक्षाका लागि नियमित जाँच गर्नुपर्छ।</p>
                  
                  <div class="safety-warning">
                    ⚠️ <strong>सुरक्षा पहिले:</strong> म्याद सकिएको ग्यास सिलिन्डर प्रयोग गर्नु अत्यन्त खतरनाक हुन सक्छ!
                  </div>
                `
              }
            ]
          }
        ]
      }
    }
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [currentGrade, setCurrentGrade] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [visitedLessons, setVisitedLessons] = useState(() => {
    const saved = localStorage.getItem('visitedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [showOfflineSettings, setShowOfflineSettings] = useState(false);

  // Service Worker integration
  const { 
    isServiceWorkerReady, 
    isServiceWorkerUpdated, 
    cacheSize, 
    updateServiceWorker,
    updateCacheSize,
    clearCache 
  } = useServiceWorker();

  // Force re-render when language changes
  const [, forceUpdate] = useState({});
  
  const content = SAMPLE_CONTENT[language] || SAMPLE_CONTENT.en;

  // Search functionality - fixed to actually work
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = [];
    const grades = ['grade9', 'grade10', 'essentials'];
    
    grades.forEach(gradeKey => {
      const grade = content.grades[gradeKey];
      if (grade && grade.topics) {
        grade.topics.forEach(topic => {
          if (topic.lessons) {
            topic.lessons.forEach(lesson => {
              if (lesson.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push({
                  grade: gradeKey,
                  gradeTitle: grade.title,
                  topic: topic.id,
                  topicTitle: topic.title,
                  lesson: lesson.id,
                  lessonTitle: lesson.title,
                  icon: topic.icon
                });
              }
            });
          }
        });
      }
    });
    
    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  }, [searchTerm, content]);

  const handleSearchResultClick = (result) => {
    setCurrentGrade(result.grade);
    setCurrentTopic(result.topic);
    setCurrentLesson(result.lesson);
    setSearchTerm('');
    setShowSearchResults(false);
    setSidebarOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('visitedLessons', JSON.stringify(visitedLessons));
  }, [visitedLessons]);

  useEffect(() => {
    if (currentLesson) {
      const lessonId = `${currentGrade}-${currentTopic}-${currentLesson}`;
      if (!visitedLessons.includes(lessonId)) {
        setVisitedLessons([...visitedLessons, lessonId]);
      }
    }
  }, [currentLesson, currentGrade, currentTopic, visitedLessons]);

  // Force re-render when language changes
  useEffect(() => {
    forceUpdate({});
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    console.log('Changing language to:', newLanguage);
    setLanguage(newLanguage);
    // Force component re-render
    setTimeout(() => forceUpdate({}), 10);
  };

  const getCurrentLessonData = () => {
    if (!currentGrade || !currentTopic || !currentLesson) return null;
    const grade = content.grades[currentGrade];
    const topic = grade?.topics.find(t => t.id === currentTopic);
    const lesson = topic?.lessons.find(l => l.id === currentLesson);
    return { grade, topic, lesson };
  };

  const navigateLesson = (direction) => {
    const { grade, topic } = getCurrentLessonData();
    if (!grade || !topic) return;

    const currentLessonIndex = topic.lessons.findIndex(l => l.id === currentLesson);
    if (direction === 'next' && currentLessonIndex < topic.lessons.length - 1) {
      setCurrentLesson(topic.lessons[currentLessonIndex + 1].id);
    } else if (direction === 'prev' && currentLessonIndex > 0) {
      setCurrentLesson(topic.lessons[currentLessonIndex - 1].id);
    }
  };

  const downloadPDF = () => {
    const { lesson } = getCurrentLessonData();
    if (!lesson) return;
    
    // Simple PDF generation (in real implementation, use jsPDF or similar)
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${lesson.title}</title>
          <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
          <h1>${lesson.title}</h1>
          ${lesson.content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Handle Essential Skills Navigation View
  if (currentGrade === 'essentials' && !currentTopic) {
    return (
      <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        {/* Floating particles background effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-20 left-32 w-5 h-5 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-40 right-10 w-3 h-3 bg-indigo-300 rounded-full animate-pulse opacity-70"></div>
        </div>

        {/* Offline Indicator */}
        <OfflineIndicator />
        
        {/* Install Prompt */}
        <InstallPrompt />

        {/* Enhanced Header */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/90 border-purple-500/20' : 'bg-white/90 border-blue-200/50'} backdrop-blur-xl border-b shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div 
                onClick={() => setCurrentGrade(null)}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📚</div>
                <h1 className={`text-2xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                  {content.siteName}
                </h1>
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Enhanced Language Toggle */}
                <div className={`flex items-center space-x-1 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md rounded-xl p-1.5 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'en' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('np')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'np' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    नेपाली
                  </button>
                </div>

                {/* Enhanced Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 shadow-lg' : 'bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-400 shadow-lg'}`}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Essential Navigation Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${darkMode ? 'from-blue-400 via-purple-400 to-pink-400' : 'from-blue-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-pulse`}>
              Essential Navigation ⚡
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
              Life skills that every student should master - from safety tips to money management!
            </p>
          </div>

          {/* Enhanced Essential Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {content.grades.essentials.topics.map((topic, index) => (
              <div 
                key={topic.id}
                onClick={() => setCurrentTopic(topic.id)}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} relative overflow-hidden`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 6 === 0 ? 'from-blue-500/10 to-purple-500/10' :
                  index % 6 === 1 ? 'from-green-500/10 to-teal-500/10' :
                  index % 6 === 2 ? 'from-orange-500/10 to-red-500/10' :
                  index % 6 === 3 ? 'from-purple-500/10 to-pink-500/10' :
                  index % 6 === 4 ? 'from-red-500/10 to-orange-500/10' :
                  'from-indigo-500/10 to-blue-500/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r ${
                    index % 6 === 0 ? 'group-hover:from-blue-500 group-hover:to-purple-500' :
                    index % 6 === 1 ? 'group-hover:from-green-500 group-hover:to-teal-500' :
                    index % 6 === 2 ? 'group-hover:from-orange-500 group-hover:to-red-500' :
                    index % 6 === 3 ? 'group-hover:from-purple-500 group-hover:to-pink-500' :
                    index % 6 === 4 ? 'group-hover:from-red-500 group-hover:to-orange-500' :
                    'group-hover:from-indigo-500 group-hover:to-blue-500'
                  } group-hover:bg-clip-text transition-all duration-300`}>
                    {topic.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    {topic.description}
                  </p>
                  
                  {/* Lesson count badge */}
                  <div className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} group-hover:bg-gradient-to-r ${
                    index % 6 === 0 ? 'group-hover:from-blue-500 group-hover:to-purple-500' :
                    index % 6 === 1 ? 'group-hover:from-green-500 group-hover:to-teal-500' :
                    index % 6 === 2 ? 'group-hover:from-orange-500 group-hover:to-red-500' :
                    index % 6 === 3 ? 'group-hover:from-purple-500 group-hover:to-pink-500' :
                    index % 6 === 4 ? 'group-hover:from-red-500 group-hover:to-orange-500' :
                    'group-hover:from-indigo-500 group-hover:to-blue-500'
                  } group-hover:text-white transition-all duration-300`}>
                    {topic.lessons?.length || 0} lessons
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentGrade(null)}
              className={`px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentGrade) {
    return (
      <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        {/* Floating particles background effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-20 left-32 w-5 h-5 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-40 right-10 w-3 h-3 bg-indigo-300 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-300 rounded-full animate-pulse opacity-60"></div>
        </div>

        {/* Offline Indicator */}
        <OfflineIndicator />
        
        {/* Install Prompt */}
        <InstallPrompt />

        {/* Service Worker Update Banner */}
        {isServiceWorkerUpdated && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 text-center shadow-2xl">
            <div className="flex items-center justify-center space-x-4">
              <span className="font-semibold">✨ A new version is available!</span>
              <button
                onClick={updateServiceWorker}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Update Now
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Header */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/90 border-purple-500/20' : 'bg-white/90 border-blue-200/50'} backdrop-blur-xl border-b shadow-2xl`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <div className="text-3xl animate-bounce">📚</div>
                <h1 className={`text-2xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                  {content.siteName}
                </h1>
                {/* Enhanced Offline Status Indicator */}
                {isServiceWorkerReady && (
                  <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-xs font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                      Offline Ready
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Enhanced Search */}
                <div className="hidden sm:block relative">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={content.search}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`pl-12 pr-4 py-3 rounded-2xl border-2 ${darkMode ? 'bg-gray-800/80 border-gray-600 text-white placeholder-gray-400' : 'bg-white/80 border-gray-300 placeholder-gray-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 backdrop-blur-md shadow-lg w-64`}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      🔍
                    </div>
                  </div>
                  
                  {/* Enhanced Search Results Dropdown */}
                  {showSearchResults && (
                    <div className={`absolute top-full left-0 right-0 mt-2 ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-xl border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'} rounded-2xl shadow-2xl max-h-60 overflow-y-auto z-50`}>
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchResultClick(result)}
                          className={`w-full text-left px-6 py-4 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} last:border-b-0 transition-all duration-300`}
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">{result.icon}</span>
                            <div>
                              <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {result.lessonTitle}
                              </div>
                              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {result.gradeTitle} • {result.topicTitle}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced Offline Settings Button */}
                <button
                  onClick={() => setShowOfflineSettings(!showOfflineSettings)}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200'} shadow-lg`}
                  title="Offline Settings"
                >
                  ⚙️
                </button>

                {/* Enhanced Language Toggle */}
                <div className={`flex items-center space-x-1 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md rounded-xl p-1.5 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'en' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('np')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'np' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    नेपाली
                  </button>
                </div>

                {/* Enhanced Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 shadow-lg' : 'bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-400 shadow-lg'}`}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
            
            {/* Enhanced Offline Settings Panel */}
            {showOfflineSettings && (
              <div className={`absolute top-full left-0 right-0 ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-xl border-t-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-2xl p-6 z-40`}>
                <div className="max-w-7xl mx-auto">
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                    Offline Settings ⚙️
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50/80'} backdrop-blur-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          App Status
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {isServiceWorkerReady ? 'Ready for offline use' : 'Setting up offline mode...'}
                      </p>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50/80'} backdrop-blur-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-blue-500 text-xl">💾</span>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Cache Size
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                        {cacheSize}
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={updateCacheSize}
                          className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Refresh
                        </button>
                        <button
                          onClick={clearCache}
                          className="text-xs px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50/80'} backdrop-blur-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-purple-500 text-xl">📱</span>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Install App
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Install for the best offline experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="mb-12 relative">
              <img 
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg" 
                alt="Students learning programming together"
                className="mx-auto w-full max-w-lg rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              {/* Floating badges around image */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                Interactive! 🎯
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                Free Forever! 🎉
              </div>
            </div>
            
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                {content.subtitle}
              </span>
            </h2>
            <p className={`text-xl md:text-2xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
              {content.tagline}
            </p>
            
            {/* Enhanced Grade Selection Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div 
                onClick={() => setCurrentGrade('grade9')}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/80 hover:bg-blue-50/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-blue-200/50'} relative overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
                    {content.startGrade9}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    Computer Basics & Fundamentals
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => setCurrentGrade('grade10')}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/80 hover:bg-purple-50/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-purple-200/50'} relative overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300`}>
                    {content.startGrade10}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    Programming & Advanced Concepts
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Essential Skills Section */}
              <div 
                onClick={() => setCurrentGrade('essentials')}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/80 hover:bg-green-50/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-green-200/50'} relative overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300`}>
                    {content.startEssentials}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    Life Hacks & Practical Skills
                  </p>
                  
                  {/* Special badge for Essential Skills */}
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg">
                    🔥 Most Popular
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {[
              { icon: "🌍", title: "Multilingual", desc: "Learn in English or Nepali", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
              { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on all devices", image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5" },
              { icon: "🔍", title: "Smart Search", desc: "Find lessons instantly", image: "https://images.pexels.com/photos/7972949/pexels-photo-7972949.jpeg" },
              { icon: "🆓", title: "Completely Free", desc: "No signup required", image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg" }
            ].map((feature, index) => (
              <div key={index} className={`group text-center p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                <div className="relative mb-6">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-16 h-16 mx-auto rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 text-2xl group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
                  {feature.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className={`inline-flex items-center px-8 py-4 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-lg shadow-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mr-3`}>Ready to start learning?</span>
              <span className="text-2xl animate-bounce">👆</span>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentLessonData = getCurrentLessonData();
  const gradeData = content.grades[currentGrade];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                ☰
              </button>
              
              <div 
                onClick={() => setCurrentGrade(null)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="text-2xl">📚</div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content.siteName}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden sm:block relative">
                <input
                  type="text"
                  placeholder={content.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className={`absolute top-full left-0 right-0 mt-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50`}>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result)}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-b-0`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{result.icon}</span>
                          <div>
                            <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {result.lessonTitle}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {result.gradeTitle} • {result.topicTitle}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Toggle */}
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('np')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'np' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  नेपाली
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? content.lightMode : content.darkMode}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-80 transition-transform duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r overflow-y-auto`}>
          <div className="p-6">
            <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {gradeData.title}
            </h2>
            
            {gradeData.topics.map(topic => (
              <div key={topic.id} className="mb-6">
                <h3 
                  onClick={() => setCurrentTopic(currentTopic === topic.id ? null : topic.id)}
                  className={`flex items-center justify-between cursor-pointer font-semibold text-lg mb-3 p-3 rounded-lg transition-colors ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-xl">{topic.icon}</span>
                    <span>{topic.title}</span>
                  </span>
                  <span className={`transform transition-transform ${currentTopic === topic.id ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </h3>
                
                {currentTopic === topic.id && (
                  <div className="ml-4 space-y-2">
                    {topic.lessons.map(lesson => {
                      const lessonId = `${currentGrade}-${topic.id}-${lesson.id}`;
                      const isVisited = visitedLessons.includes(lessonId);
                      const isActive = currentLesson === lesson.id;
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLesson(lesson.id)}
                          className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-2 ${
                            isActive 
                              ? 'bg-blue-500 text-white' 
                              : darkMode 
                                ? 'text-gray-300 hover:bg-gray-700' 
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${isVisited ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                          <span>{lesson.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {currentLessonData?.lesson ? (
            <div className="max-w-4xl mx-auto p-6">
              {/* Lesson Header */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
                <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentLessonData.lesson.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                    {currentLessonData.topic.title}
                  </span>
                  <button
                    onClick={downloadPDF}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                  >
                    {content.downloadPdf}
                  </button>
                </div>
              </div>

              {/* Lesson Content */}
              <div className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-8 mb-6 lesson-content`}>
                <div dangerouslySetInnerHTML={{ __html: currentLessonData.lesson.content }} />
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => navigateLesson('prev')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                >
                  {content.previous}
                </button>
                
                <button
                  onClick={() => navigateLesson('next')}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  {content.next}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-6xl mb-4">📖</div>
                <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Select a Lesson
                </h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Choose a topic and lesson from the sidebar to get started
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default App;