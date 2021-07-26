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





