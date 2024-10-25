<script setup>
  // import Header from '@/components/Header.vue';
   import InfoSection from '@/components/InfoSection.vue';
  // import Footer from '@/components/Footer.vue';
  import ExpandableSection from '../components/ExpandableSection.vue';
</script>

<template>
   <div>
        <Header></Header>
        <main class="bg-gray-100">
            <!-- Section 1 -->
            <section class="py-12 bg-white">
        <div class="container mx-auto">
          <ExpandableSection title="Why Recycling Matters" :defaultOpen="true">
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            
              <div class="md:w-1/2 border-l-4 border-green-500 rounded-5-lg pl-4 ">
                <p class="text-black mt-4">
                  Recycling plays a critical role in reducing waste, conserving
                  natural resources, and lowering pollution. By reusing
                  materials like plastics, metals, paper, and glass, we prevent
                  these items from ending up in landfills and reduce the need
                  for new raw materials. Recycling not only helps the
                  environment but also supports sustainable communities.
                </p>
                <p class="text-black mt-4">
                  At EcoTrack, we believe that recycling is essential to
                  safeguarding our planet for future generations. That's why our
                  platform is designed to help individuals and organizations
                  take control of their waste habits. Using EcoTrack, you can
                  set waste reduction goals, monitor your progress, and
                  contribute to a cleaner, greener Earth.
                </p>
                  <img
                src="/imgs/eduPageImgs/recycling.jpg"
                alt="Recycling Image"
                class="w-full md:w-1/2 rounded-lg shadow-md mx-auto"
              />
              </div>
            </div>
          </ExpandableSection>
        </div>
      </section>
            <!-- Expanding Section 2-->
            <section class="py-12 bg-white">
        <div class="container mx-auto">
          <ExpandableSection title="Key Benefits of Recycling">
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
              <div class="md:w-1/2">
                   <ol class="list-decimal space-y-4 text-black">
                  <li><strong>Conserving Natural Resources:</strong> Recycling reduces the demand for raw materials like trees, water, and minerals, helping preserve our planet's resources for future generations.</li>
                  <li><strong>Energy Savings:</strong> Recycling uses significantly less energy compared to producing new products from raw materials. For example, recycling aluminum saves 95% of the energy required to make the same product from new aluminum.</li>  
                  <li><strong>Waste Reduction:</strong> Recycling helps decrease the amount of waste sent to landfills, reducing pollution and the release of harmful chemicals into the environment.</li>  
                  <li><strong>Climate Change Mitigation:</strong> By reducing the energy required to create new products, recycling lowers greenhouse gas emissions, helping to combat global warming.</li>  
                </ol>
              </div>
            </div>
          </ExpandableSection>
        </div>
      </section>
            
            
            <!-- Expanding Section 3-->
            <section class="py-12 bg-white">
        <div class="container mx-auto">
          <ExpandableSection title="What Can Be Recycled?">
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
              <div class="md:w-1/2">
                <ul class="list-disclist-inside space-y-4 text-black">
                  <li><strong>Plastics:</strong> Bottles, containers, and packaging made from recyclable plastics can be reused to produce new items. Sorting by type (like PET or HDPE) is crucial.</li>
                  <li><strong>Paper & Cardboard:</strong> Newspapers, magazines, cardboard boxes, and office paper can be recycled to make new paper products, reducing deforestation.</li>  
                  <li><strong>Glass:</strong> Glass containers, jars, and bottles are 100% recyclable and can be turned into new glass products endlessly without loss of quality.</li>  
                  <li><strong>Metals:</strong> Aluminum cans, steel products, and other metal scraps can be melted down and reused, cutting energy consumption and mining impacts.</li>  
                  <li><strong>Electronics:</strong> Many components in electronic devices can be recycled, reducing electronic waste (e-waste) and recovering valuable metals.</li>  
                   </ul>
              </div>
            </div>
          </ExpandableSection>
        </div>
      </section>


            <!-- Expanding Section 4-->
            <section class="py-12 bg-white">
        <div class="container mx-auto">
          <ExpandableSection title="How to Recycle Correctly">
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
              <div class="md:w-1/2">
                <ol class="list-decimal  space-y-4 text-black">
                  <li><strong>Clean & Dry Items:</strong> Make sure your recyclables are clean and dry. Food waste, liquids, and grease can contaminate an entire batch of recyclables, making them unusable.</li>
                  <li><strong>Sort by Category:</strong> Many recycling centers require sorting materials like plastic, metal, and paper into separate bins. Sorting increases efficiency and ensures recyclables are processed correctly.</li>  
                  <li><strong>Check Local Guidelines:</strong> Recycling rules vary by location. Always check your local recycling guidelines to make sure you're following proper procedures.</li>  
                   </ol>
              </div>
            </div>
          </ExpandableSection>
        </div>
      </section>
            
            

       <!-- Section 5 -->
       <section class="py-12 bg-white">
        <div class="container mx-auto">
          <ExpandableSection title="How EcoTrack Can Help You Make a Difference">
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            
              <div class="md:w-1/2 border-l-4 border-green-500 rounded-5-lg pl-4">
                <p class="text-black  mt-4">
                  Recycling is essential, but sometimes staying on top of your efforts can be challenging. 
                  That's where EcoTrack comes in. Our platform helps you manage your recycling goals, track your progress, and celebrate your achievements with fun, engaging tools.
                </p>
                <h3 class="text-black mt-4 font-bold">Set Goals & Earn Rewards</h3>
                <p class="text-black mt-4">
                  With EcoTrack, you can set personal or organizational waste reduction goals (e.g., reduce plastic waste by 20% over six months) and work toward becoming more environmentally friendly. 
                  As you log your waste and recycling habits, you can track progress and stay motivated.
                </p>
                <p class="text-black mt-4">
                  Earn badges and rewards for reaching sustainability milestones. Whether you're hitting a new recycling goal or reducing waste, you'll receive achievements you can share online with friends, family, or your community. 
                  These rewards help keep the journey fun and exciting.
                </p>
                <h3 class="text-black mt-4 font-bold">Leaderboard & Community Challenges</h3>
                <p class="text-black mt-4">
                  Compete with others in recycling challenges through our leaderboard. Whether it's individuals or organizations, you can see who’s making the biggest environmental impact and inspire others to join the cause.
                </p>
                <p class="text-black mt-4">
                  As you work towards improving your recycling habits, you'll not only make a difference but also get the chance to participate in community challenges, creating positive reinforcement within your network.
                </p>
             
              </div>
            </div>
          </ExpandableSection>
        </div>
      </section>

       <!-- Section 6 -->
       <section class="py-12 bg-white">
        <div class="container mx-auto">
          <ExpandableSection title="The Importance of Reducing Waste">
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            
              <div class="md:w-1/2">
                <p class="text-black  mt-4">
                  While recycling is crucial, reducing the amount of waste we generate is just as important. Here are some strategies to reduce waste:
                </p>
                <ul class="list-disc  space-y-4 text-black">
                  <li><strong>Buy Reusable Products:</strong> Invest in reusable bags, water bottles, and containers to reduce single-use plastic.</li>
                  <li><strong>Composting:</strong> Organic waste, like food scraps, can be composted to enrich soil rather than being sent to landfills.</li>  
                  <li><strong>Repair Instead of Replace:</strong> Fix broken items when possible to extend their lifespan and avoid waste.</li>  
                   </ul>
                   <img
                      src="/imgs/eduPageImgs/recycling2.jpg"
                      alt="Recycling Image"
                      class="w-full md:w-1/2 rounded-lg shadow-md mx-auto mt-6"
                    />
              </div>
            </div>
          </ExpandableSection>
        </div>
      </section>


       <!-- Section 7 -->
       <section class="py-12 bg-white">
        <div class="container mx-auto">
          <ExpandableSection title="Recycling Facts">
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            
              <div class="md:w-1/2">
                <p class="text-black  mt-4">
                  While recycling is crucial, reducing the amount of waste we generate is just as important. Here are some strategies to reduce waste:
                </p>
                <ul class="list-disc  space-y-4 text-black">
                  <li>Recycling one ton of paper saves 17 trees and 7,000 gallons of water.</li>
                  <li>Recycling one aluminum can saves enough energy to run a TV for three hours.</li>  
                  <li>Glass is 100% recyclable and can be reused over and over again without losing quality.</li>  
                   </ul>
             
              </div>
            </div>
          </ExpandableSection>
        </div>
      </section>


                 <!-- Section 9 -->
              
     
             <!-- Section 8 -->
            <section class="py-12 bg-white">
                <div class="container mx-auto">
                    <h3 class="text-lg font-bold text-center mb-6">What are the EU targets for sustainability?</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 border-l-4 border-green-600 bg-gray-50 rounded-md">
                    <h3 class="font-bold text-lg mb-4">Reducing emissions</h3>
                    <p class="text-gray-600">
                      <a href="https://unfccc.int/climate-action/climate-neutral-now/reduce-your-emissions/tips-to-reduce-your-emissions#:~:text=For%20example%2C%20adopt%20an%20environmental,define%20renewable%20energy%20use%20targets." 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          class="text-blue-600 underline hover:text-blue-800">
                           Click here to read more.
                        </a>
                    </p>
                </div>

                <div class="p-6 border-l-4 border-green-600 bg-gray-50 rounded-md">
                    <h3 class="font-bold text-lg mb-4">Governance system</h3>
                    <p class="text-gray-600">Content about governance systems.</p>
            </div> </div>
                        <div class="p-6 border-l-4 border-green-600 bg-gray-50 rounded-md mt-4">
                              <h3 class="font-bold text-lg mb-4">Get Involved with EcoTrack</h3>
                              <p class="text-gray-600 p-5">
                                Recycling is a community effort, and we want to make it easier and more rewarding for you. With EcoTrack, you can participate in local recycling programs, join neighborhood clean-ups, or start composting at home while tracking your progress along the way. Every small action contributes to a larger impact, and we're here to help you every step of the way.
                              </p>
                    
                    </div>
             
       
        </div>
      </section>
    </main>
    <Footer></Footer>
    </div>

</template>

<style scoped>

</style>