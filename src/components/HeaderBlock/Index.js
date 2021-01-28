import s from './style.module.css';

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
}

export default HeaderBlock;
