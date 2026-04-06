# Netflix GPT
-created React app with Vite as bundler 
-configured tailwind css
-built header
-had routing applied 
-login form 
-sign up form 
-form validation
-useRef hook
-firebase integration
-enabled user-signin and sign up functionality
-Used onAuthStateChanged to persist user sessions and track authentication state in real-time
-ntegrated Redux to manage global user state.
-Synced Firebase authentication data with Redux store.
-Manually updated Redux store with user profile details after authentication.
-Redirect user to login page and not have access to browse page if not logged in 
-add hardcoded codes in constant file
-BROWSE PAGE -Beginning
=regster and create TMDB app and get access token
-get data from TMDB "now playing movie list"(fetch)
-creating custom hooks(useNowPlayngMovies)
-create MovieSlice
-update store with movie data 
-planning for mainconductir and secondary conductor
-fetch data fior trailer video by accessing video api in TMdb
-update store with trailer video data 
-embed the youtube video and make it autoplay and mute
-tailwind classes to main container to make main container look awesome 
-Secondary Conatiner building
-fetched api for toprated,upcoming using hooks
-MoviesList
-Built movie card
-TmDb image Cdn Url (constants)






# features
-Login/Signup
   -signup/login form
   -redirect to browser page

-Browse(after authentication)
    -Header
      
    -mainMovie
      -trailer in bg
      -title and description
      -Movie suggestions
              -Movieslist*N("horizontally)
    
-NetflixGPT
    -search bar
    -movie suggestions
