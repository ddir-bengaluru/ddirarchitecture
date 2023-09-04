import React from 'react'
import "./landing.scss";
import hero from './../../assets/images/hero.jpeg';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Landing() {
  var scrollLocation = window.pageYOffset ;
  return (
    <div className='landing'>
      <ScrollToTop />
      <div className="hero">
        <h1 className='hero__title'>DDIR ARCHITECTURE</h1>
        <p className='hero__slang'>Turn your dreams into reality</p>
      </div>
      <div className="text-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum distinctio possimus voluptates, odio facilis sed commodi, ipsa nihil ad quaerat quos quia doloremque eius reiciendis officia nisi mollitia ex illo. Unde ex explicabo porro magni, non libero est ut ad minima aspernatur eos incidunt dolores praesentium beatae facilis perferendis nisi odio enim officiis nam consectetur officia! Impedit libero consectetur esse voluptas sint tenetur vitae in totam id delectus inventore fugit recusandae ipsam culpa debitis eveniet autem dolorem unde aliquam omnis molestias, aliquid, maxime pariatur. Odio error iusto enim voluptates in. Voluptate aut facilis tempora itaque, ad, repellendus praesentium cum, accusantium vero laboriosam exercitationem reiciendis architecto. Numquam tenetur voluptatum, ipsam eveniet quaerat quae autem eius placeat hic architecto, impedit quod id. Nesciunt voluptatum accusamus laboriosam! Dolorum necessitatibus eius beatae dolore tenetur nam, laudantium nostrum aut autem tempora assumenda, vitae hic. Reiciendis deserunt distinctio deleniti. Iure consequatur mollitia tenetur laborum vero. Expedita aut vero quia explicabo. Dolorum neque voluptas saepe quis id, quas harum. Cum, nam. Quaerat vero cumque sunt recusandae ipsam velit cupiditate ipsum quod blanditiis adipisci molestias nisi culpa rem doloribus facere vel, magnam, perspiciatis consequuntur sit repudiandae earum rerum maiores accusamus! Cupiditate veritatis expedita vitae, aliquid porro esse vel mollitia impedit beatae odit ratione necessitatibus ab corporis cum maiores recusandae ipsa. Pariatur expedita libero, illo vel aut praesentium rerum doloribus, illum, fuga rem esse repellendus? Dicta amet facilis perferendis sit nemo. Iusto commodi, est amet deserunt ex eius adipisci natus praesentium dolores maiores! Officiis blanditiis nobis consequatur sapiente! Voluptates quaerat minima facilis quo, nam sequi quae cum quasi officiis <span className='highlight'>quas vero eligendi</span> esse accusantium fugit provident! Voluptas dicta odio earum provident ratione vel unde quos veritatis praesentium voluptatum blanditiis tempore totam, suscipit placeat illum cumque, aspernatur nam iusto a inventore culpa, veniam incidunt! Ad quidem totam impedit ducimus.
      </div>
      <div className="showcase">
        <h2>Our Award Winning Projects</h2>
        <div className="cards">
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
          <div className="card">
            <img className='card__img' src={hero} alt="" />
            <h6 className='card__title'>Title</h6>
            <p className='card__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga maxime blanditiis nobis libero eveniet ratione sit suscipit aut ut! eveniet ratione sit suscipit aut ut!eveniet ratione eveniet ratione eveniet ratione sit suscipit aut ut!eveniet ratione sit suscipit aut ut!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
