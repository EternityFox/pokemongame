import s from './layout.module.css';


const Layout = ({id, title, descr, urlBg, colorBg}) => {  
  const styleRoot =( urlBg ? {backgroundImage: `url(${urlBg})`} : {}); 
  const colorRoot= (colorBg ? {backgroundColor: colorBg} : {});
  return(
  <section className={s.root} id={id}>  
    <div className={s.wrapper} style={{...styleRoot, ...colorRoot}}>
        <article>
            <div className={s.title}>
                {
                  title && (<h3>
                    {title}
                    </h3>
                    )
                }
                
                <span className={s.separator}></span>
            </div>
            <div className={s.desc.full} >
                {
                  descr && (<p>
                    {descr}
                    </p>)
                }
            </div>
        </article>
    </div>
  </section>
  )
}
export default Layout;