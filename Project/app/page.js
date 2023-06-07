import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  //const initialAccounts = await new AccountsRepo().getAccounts()
  // console.log(initialAccounts);
  return (
  
<main>
            <div class="welcome">
          <img src="./images/WelcomeImage.png" alt="Background Image"></img>
          <h1>Welcome to ConfPlus,
             where you can create or check different conferences near you!</h1>
            </div>

            <div class="introduction">
            <h2>Introduction</h2>
          </div>

          
          <div class="introductionText">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, mauris a lacinia eleifend, mauris purus sagittis nulla, nec scelerisque nulla nibh quis arcu. Fusce ac faucibus dolor. Duis venenatis lorem ac orci tincidunt,
                 sit amet faucibus elit pellentesque. Duis dapibus metus quis magna laoreet, nec ultricies enim tristique. Sed a ultrices odio. Maecenas vel libero mi. Fusce et ante tellus. 
                 Sed at nulla eu felis molestie dictum. Phasellus id semper velit.</p>
                 <br></br>
             <p>Curabitur in risus eget augue faucibus luctus. Vivamus gravida justo metus, id euismod ex vestibulum sit amet.
                 Curabitur in risus at lectus tincidunt viverra. Suspendisse lacinia blandit ipsum, vitae tincidunt dolor iaculis vitae.
                  Nam eget est bibendum, varius risus eu, blandit elit. Nulla et convallis nisi.
                   Nullam eu mauris a turpis vestibulum faucibus at ac dolor. Donec consequat odio nisl, nec iaculis lectus feugiat eget.
                    Etiam eu augue bibendum, blandit dolor quis, malesuada ex. Donec vel augue enim.
                </p>
                <br></br>
             <p>Phasellus gravida nisi eu neque imperdiet, vitae lobortis ipsum molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                 Sed eget sagittis nisl, sit amet pellentesque magna. Sed at massa id sapien faucibus dapibus vel sed augue. In hac habitasse platea dictumst. Donec eget augue ante. Nam pharetra tristique nunc,
                  ut venenatis libero efficitur ut. Etiam ut enim eget tellus vehicula consectetur. 
                  In hac habitasse platea dictumst. Vivamus luctus ex euismod, gravida nulla ac,
                   dapibus nulla. Curabitur luctus justo et mauris tristique blandit.
                </p>
                <br></br>
                </div>
                <div class="avenues">
                  <h2>Avenues</h2>
                </div> 
                <div class="card-container">
                     <div class="card">
                      <img src="./images/qncc.png" alt="Example Image" class="card-image"></img>
                         <div class="card-content">
                        <h3 class="card-title">Qatar National Convention Centre</h3>
                     <p class="card-text">This hall holds up to 4,000 delegates and can be set up for banquets, concerts and plenary sessions. It also has a separate balcony seating area. This venue is supported by the latest technology to meet the needs of sophisticated events.
                         Its main features are:
                         Capacity for 4,000 delegates theatre-style or 1,200-1,500 delegates banquet-style plus a pre-function area
                     </p>
                      </div>
                     </div>
                     <div class="card">
                        <img src="./images/DECC.png" alt="Example Image" class="card-image"></img>
                           <div class="card-content">
                          <h3 class="card-title">Doha Exhibition and Convention Centre (DECC)</h3>
                       <p class="card-text">Contains seven Exhibit Halls and adjacent conference rooms, all under a monumental
                        floating blade roof. The 48,000m2 Convention Centre can be operated as five independent exhibit halls,
                         or with the operable partitions opened, a single 35,000 m2 hall is created, one of the largest single halls 
                         in the world with an 18m clear height throughout. Circular skylights flood the exhibit halls with natural light</p>
                        </div>
                       </div>
                    </div>
      </main>    
  )
}
