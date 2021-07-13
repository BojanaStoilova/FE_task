<template>
  <div class="MainContent">
    <header>
      <b-navbar toggleable="lg">
        <b-img :src="require('../assets/ValtechLogoHeader.png')"></b-img>

          <b-navbar-nav id="links">
            <b-nav-item href="#sectionOne" class="active">Section one</b-nav-item>
            <b-nav-item href="#sectionTwo">Section two</b-nav-item>
            <b-nav-item href="#sectionThree">Section three</b-nav-item>
            <b-nav-item href="#sectionFour">Section four</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-form>
              <b-input-group>
                <b-form-input id="searchInput" placeholder="Type text here..."></b-form-input>
                <b-input-group-append>
                  <b-button size="lg" id="searchBtn">SEARCH</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-nav-form>
          </b-navbar-nav>

      
      </b-navbar>
    </header>

    <main>

      <div id="sectionOne">
        <div class="section-text">Section one</div>
        <div id="contactWrapper">
          <b-button id="contactBtn" @click="sendEmail()">CONTACT</b-button>
          <div class="lorem">Lorem ipsum dolor sit amet, consectetur</div>
        </div>
      </div>

      <div id="sectionTwo">
        <div class="section-text">Section two</div>
        <div class="filter">
          <b-input-group>
            <b-form-input id="filterUsers" v-model="search" placeholder="Filter users"></b-form-input>
            <b-input-group-append>
              <b-button size="lg" id="filterBtn" @click="filterCallback()">FILTER</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div id="filteredUsers">
         <UserListComponent :users="usersFiltered">
         </UserListComponent>
         
        <div id="noUsersFound">results are empty</div>
        </div>
      </div>
      
      <div id="sectionThree">
        <div class="section-text">Section three</div>
        <div>
            
        </div>
        <b-container>
          <b-row>
            <b-col>
              <article class="card">
                <img src='../assets/large-emerging-technologies.png' class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Teaser title</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae                  </p>
                  <b-button class="read-more">Read more</b-button>
                </div>
              </article>
            </b-col>
            <b-col>
              <article class="card">
                <img src='../assets/large-emerging-technologies-1.png' class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Teaser title</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <b-button class="read-more">Read more</b-button>
                </div>
              </article>
            </b-col>
          </b-row>
        </b-container>
        <b-container>
          <b-row>
            <b-col>
              <article class="card">
                <img src='../assets/large-emerging-technologies-2.png' class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Teaser title</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien.
                  </p>
                  <b-button class="read-more">Read more</b-button>
                </div>
              </article>
            </b-col>
            <b-col>
              <article class="card">
                <img src='../assets/large-emerging-technologies-3.png' class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Teaser title</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Vestibulum ante ipsum…
                  </p>
                  <b-button class="read-more">Read more</b-button>
                </div>
              </article>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div id="sectionFour">
          <div class="section-text">Section four</div>
          <div id="contactUs">
            <h4>CONTACT US</h4>
            <div class="divided-wrapper">
              <div class="field-item">
                <b-form-group
                  id="firstName"
                  label="First Name"
                  label-for="firstNameInput"
                >
                  <b-form-input
                    id="firstNameInput"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="field-item">
                <b-form-group
                  id="lastName"
                  label="Last name"
                  label-for="lastNameInput"
                >
                  <b-form-input
                    id="lastNameInput"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="divided-wrapper">
              <div class="field-item">
                <b-form-group
                  id="emailAddress"
                  label="Email address"
                  label-for="emailAddressInput"
                >
                  <b-form-input
                    id="emailAddressInput"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="field-item">
                <b-form-group
                  id="phoneNumber"
                  label="Phone number"
                  label-for="phoneNumberInput"
                >
                  <b-form-input
                    id="phoneNumber"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="divided-wrapper">
              <div class="field-item">
                <b-form-group
                  label="Your message"
                  label-for="message"
                >
                  <b-form-textarea
                    id="message"
                    rows="3"
                  ></b-form-textarea>
                </b-form-group>
              </div>
              <div class="field-item send">
                <b-button id="sendBtn">SEND</b-button>
              </div>
            </div>
            
          </div>
      </div>
      <div id="sectionFive">
        <div class="codeflair-assignment">
          <section class="user-filter">
            <label for="input-field">Filter Users by Name</label>
            <input type="text" id="filterUsersByName" @keyup="filterList()" />
            <transition name="fade">
              <span class="user-filter__no-users-found" id="noUsersTranzition">results are empty</span>  
            </transition>
            <button class="filter-button" @click="sortByAge()">Sort by Age</button>
          </section>
          <div class="user-list">
              <div id="foundUsersNum"></div>
              <ul id="itemList">
                <li v-for="user in usersFiltered2" v-b-toggle :href="'#collapse-'+user.id" @click="showDetails(user)" :key="user.id" :firstname="user.firstname" :lastname="user.lastname" >
                  <article class="user">
                    <button class="user__trigger">
                      <div class="user__image">
                        <img
                          width="48"
                          height="48"
                          :src="user.img"
                          :alt="user.firstname + ' ' + user.lastname"
                        />
                      </div>
                      <div class="user__info">
                        <h4>{{user.firstname + ' ' + user.lastname}}</h4>
                        <p class="user__age">{{'Age: ' + user.age}}</p>
                      </div>
                    </button>
                    <div class="user__extra-info">
                    </div>
                  </article>
                  <b-collapse :id="'collapse-'+user.id">{{user.additionalInfo}}</b-collapse>
                </li>
              </ul>
            </div>
        </div>
      </div>

    </main>

    <footer>
      <b-container>
        <b-row>
          <b-col>
            <b-img :src="require('../assets/ValtechLogoFooter.png')" height="26"></b-img>
          </b-col>
          <b-col>
            <p>Footer Section Title</p>
            <ul class="list-unstyled">
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media>
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media>
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media> 
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media> 
            </ul>
          </b-col>
          <b-col>
            <p>Footer Section Title</p>
            <ul class="list-unstyled">
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media>
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media>
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media> 
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media> 
            </ul>
          </b-col>
          <b-col>
            <p>Footer Section Title</p>
            <ul class="list-unstyled">
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media>
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media>
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media> 
              <b-media tag="li">
                <b-link href="#">Footer link</b-link>
              </b-media> 
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    
  </div>
</template>

<script>
import UserListComponent from "@/components/UserListComponent.vue";

const users = [
  {
      id: 1,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
      firstname: 'Deborah',
      lastname: 'Miller',
      age: '25',
      additionalInfo: 'Deborah Miller is a Frontend developer!'
  },
  {
      id: 2,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
      firstname: 'Johannes',
      lastname: 'Myles',
      age: '34',
      additionalInfo: 'Johannes Myles is a Backend developer!'
  },
  {
      id: 3,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
      firstname: 'Britta',
      lastname: 'Rhudinbergh',
      age: '43',
      additionalInfo: 'Britta Rhudinbergh is a Designer!'
  },
  {
      id: 4,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',        
      firstname: 'Olivia',
      lastname: 'Brown',
      age: '44',
      additionalInfo: 'Olivia Brown is a Quality assurance tester!'
  },
  {
      id: 5,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',        
      firstname: 'Daniel',
      lastname: 'Rudin',
      age: '32',
      additionalInfo: 'Daniel Rudin is a Web developer!'
  },
  {
      id: 6,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',        
      firstname: 'Teressa',
      lastname: 'Sandhurst',
      age: '35',
      additionalInfo: 'Teressa Sandhurst is a IT technician!'
  },
  {
      id: 7,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',        
      firstname: 'Dina',
      lastname: 'Sokolowski',
      age: '28',
      additionalInfo: 'Dina Sokolowski is a Systems analyst!'
  },
  {
      id: 8,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',        
      firstname: 'André',
      lastname: 'Szillagy',
      age: '23',
      additionalInfo: 'André Szillagy is a Network engineer!'
  }, 
  {
      id: 9,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',          
      firstname: 'Fabian',
      lastname: 'Stocker',
      age: '45',
      additionalInfo: 'Fabian Stocker is a User experience designer!'
  },
  {
      id: 10,
      img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',          
      firstname: 'Christian',
      lastname: 'Williams',
      age: '41',
      additionalInfo: 'Christian Williams is a Database administrator!'
  }   
];

export default {
  name: 'MainContent',
  components: {
    UserListComponent
  },
  data() {
    return {
      search: "",
      usersFiltered: users,
      usersFiltered2: users
    };
  },
  methods: {
        sendEmail: function() {
          window.location.href = "mailto:mk.contact@valtech.com";
        },
        filterCallback: function() {
          
          let tempUsers = users;
    
          if (this.search != '' && this.search) {
            tempUsers = tempUsers.filter((item) => {
              if (item.firstname.toUpperCase().includes(this.search.toUpperCase()) || 
                item.lastname.toUpperCase().includes(this.search.toUpperCase()) ||
                item.age.includes(this.search))
                return true;
              else
                return false;
              
            })
          }
      
          this.usersFiltered = tempUsers;
          if (tempUsers.length == 0) {
            document.getElementById("noUsersFound").classList.add("visible");
          }
          else {
            document.getElementById("noUsersFound").classList.remove("visible");
          }
          return tempUsers;
        },
        filterList: function() {
         var input = document.getElementById('filterUsersByName');
          var filter = input.value.toUpperCase();

          let tempUsers = users;
          
          if (filter != '' && filter) {
            if (filter.length >= 3) {
              tempUsers = tempUsers.filter((item) => {
                if (item.firstname.toUpperCase().includes(filter) || item.lastname.toUpperCase().includes(filter))
                  return true;
                else
                  return false;
                
              })
              if (tempUsers.length == 1)
                document.getElementById("foundUsersNum").innerHTML = "Found " + tempUsers.length + " user";
              else
                document.getElementById("foundUsersNum").innerHTML = "Found " + tempUsers.length + " users  ";

              if (tempUsers.length == 0) {
                document.getElementById("noUsersTranzition").classList.add("visible");
                document.getElementById("noUsersTranzition").classList.add("tranzition");
              }
              else {
                document.getElementById("noUsersTranzition").classList.remove("visible");
                document.getElementById("noUsersTranzition").classList.remove("tranzition");

              }
            }
            else
              document.getElementById("foundUsersNum").innerHTML = "";
          }

          if (filter.length < 3) {
            document.getElementById("noUsersTranzition").classList.remove("visible");
            document.getElementById("noUsersTranzition").classList.remove("tranzition");
          }

          this.usersFiltered2 = tempUsers;
          
          return tempUsers;
        },
        sortByAge: function() {
            users.sort((a, b) => (a.age > b.age) ? 1 : -1)
        },
        showDetails: function(user) {
          var id = "collapse-" + user.id;
          var element = document.getElementById(id);
          if (element.style.display == "none") {
            element.style.display = "block";
          }
          else
          element.style.display = "none"
        }
    }
}
</script>