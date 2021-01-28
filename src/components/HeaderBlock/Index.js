import s from './style.module.css';

const Header = ({title, descr}) => {
  return(
  <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.container}>
      {title && (<h1>
        {title}
        </h1>)}
      {descr && (<p>
        {descr}
        </p>)}        
    </div>
  </header>
  )
}
/*
const HeaderBlock =({title, hideBackground=false, descr}) => {
  const styleRoot= hideBackground ? {backgroundImage : 'none'} : {};
  return (
  <div className={s.root} syle={styleRoot}>
    <div className={s.container}>
      {
      title && (<h1 className={s.header}>
         {title}
      </h1>) 
      }
      {
      descr && (<p className={s.patagraph}>Simple Triple Triad</p>)
      }
    </div>
  </div>  
  )
}*/

export default Header;
