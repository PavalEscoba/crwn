## lesson 5 ##  
імпортім реакт
імпортім стілі
функ.компонент
вяртаем усю калекцыю (шапкі, жакеты і г.д.) тайтл + самі превью айтэмы.  
.collection-preview - враппер для секцыі
.preview - враппер для всех 4 айтемов.
мэпім по айтемам
Вставляем в шоппэйдж колекш-превью. Мапімся по нім. Предварітельно отфільтровав первые 4

## lesson 6 ## 
імпортім реакт
імпортім стілі
функ.компонент collection-item
collection-item
 image + url
 collection-footer
  name + price

Піндзюрым у КалекшнПревью выкарыстоўваючы спрэд аператар

## lesson 7 ## 
Хедер. Функ компонент.
дів ХЕДЕР
  лого іспользуя Лінк(logo-container) із роўтэр-дом (імпорнувшісь із срц/Ассэтсы. RaeactComponent as Logo)
  options
    Link.option
      Shop
    Link
      contact
In APp.js put header outside the switch   

## lesson 8 ##
Make sing-in-and-sign-up page + styles
Func component
Add to App.js

Sign in Component (statefull component)

in state empty strings for email and password
handleSubmit(e) => preventDefault(); + setState empty strings
handleChange (e) => preventDefault(); + setState({[name]: value})
div.sign-in
  h2 i already + span with acc and password
  form onSubmit={this.handleSubmit}
    input name=email type, value, req onChange
    label email
    input name=password type, value, req onChange
    label password
    
    input submit value="submit form"

Add to SignIn Page

## lesson 9 ##
Form input  component
func component gets handleChange, label, ...otherProps
.group
  input.form-input onChange={handleChange} {... otherProps}

  {
    label ? (<label className={ `${otherProps.value.length} ? 'shrink' : '' } form-input-label`> </label>)  : null}
  }

Insert FormInput into SignIn comp
pass label and handleChange 

## lesson 10 ##
Custom button component

Func component CustomButton (children {...otherProps})
<btn className='custom-button' {...otherProps}>

## lesson 11 ##
"Go to console"
Add project
name it continue

Free plan
Develop (authentication + db + storage + hosting)
Project (top of page), Web (<>).
enter internal name ('crwn-db')
get sdk 
  var firebaseConfig = {
    apiKey: "AIzaSyAs_pMQHeslcL3OvXRf5Ewg6t0UUBsZevc",
    authDomain: "crwn-db-5a7c1.firebaseapp.com",
    projectId: "crwn-db-5a7c1",
    storageBucket: "crwn-db-5a7c1.appspot.com",
    messagingSenderId: "417903633271",
    appId: "1:417903633271:web:ceb20004c859bac1b97772",
    measurementId: "G-Q52QW1ZTCL"
  };

  ## lesson 12 ##
  firebase.utils.js
  Import firebase from firebase/app
  import 'firebase/firestore'
  import 'firebase/auth'

  const config = {
    apiKey: "AIzaSyAs_pMQHeslcL3OvXRf5Ewg6t0UUBsZevc",
    authDomain: "crwn-db-5a7c1.firebaseapp.com",
    projectId: "crwn-db-5a7c1",
    storageBucket: "crwn-db-5a7c1.appspot.com",
    messagingSenderId: "417903633271",
    appId: "1:417903633271:web:ceb20004c859bac1b97772",
    measurementId: "G-Q52QW1ZTCL"
  };

  firebase.initialize(config); //initializing firebase with needed config

  export auth library
  export firestore library

  Making provider with Google service to get access to new Google Auth Provider class from Auth library 
  Get cusutom parameters using provider.setCustomParameters({prompt: 'select_account'});
  Always trigger sign in pop-up whenever we use GoogleAuthProvider;
  export const signInWithGoogle = () => auth.signInWithPopUp(provider)
  // export function which calls signIn pop-up with specific Google provider;

  export default firebase;

  Configure on the site ability to authenticate with Google
  on a page "Authentication" -> setUp sign in method enable Google

  go to signin page duplicate btn and fire signInWithGoogle method

## lesson 13 ##
How to make app know that user is authenticated?
App.js. Import auth from firebase utils
Store state of user. Make App.js a class component (extends, constructor, super, state (currentUser), render()).
ComponentDidMount() {} we use it to fetch.
auth.onAuthStateChanged( change state)

unsubscribeFromAuth = null;

componentWillUnmount () => {
  unsubscribefromAuth
}
