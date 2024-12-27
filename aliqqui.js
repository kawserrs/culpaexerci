   function loadNavState() {
       if (THD_CACHE_NAV_PERSIST) {
           const state = localStorage.getItem('navState');
           return state ? JSON.parse(state) : null;
       }
       return null;
   }
   