
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { en, he } from './i18n'

const IMAGES_PATH = '/assets/images/'

function ImageCard({src, caption}){
  return (
    <figure className="bg-white rounded shadow p-3">
      <img src={src} alt={caption} className="w-full h-48 object-contain"/>
      <figcaption className="text-sm text-gray-600 mt-2">{caption}</figcaption>
    </figure>
  )
}

export default function App(){
  const [lang, setLang] = useState('en')
  const t = lang==='en' ? en : he

  // gather images list from a static manifest (we'll create one server-side)
  const images = window.__IMAGE_MANIFEST__ || []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{t.name}</h1>
            <p className="text-gray-600 mt-1">{t.tagline}</p>
            <p className="text-sm text-gray-600 mt-2">Email: <a className="text-blue-600" href={'mailto:'+t.email}>{t.email}</a> · <a className="text-blue-600" href={t.github} target="_blank" rel="noreferrer">GitHub</a></p>
          </div>
          <div className="space-x-2">
            <button onClick={()=>setLang('en')} className={"px-3 py-1 rounded shadow "+(lang==='en'?'bg-white':'bg-gray-200')}>EN</button>
            <button onClick={()=>setLang('he')} className={"px-3 py-1 rounded shadow "+(lang==='he'?'bg-white':'bg-gray-200')}>HE</button>
          </div>
        </header>

        <motion.main initial={{opacity:0}} animate={{opacity:1}} className="mt-8">
          <section>
            <h2 className="text-2xl font-bold">{t.projectsTitle}</h2>
            <p className="mt-2 text-gray-700">Focused on evidence-based policy, analytics, and simulation to inform public decisions.</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <a href="#project-bis" className="block p-6 bg-white rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">{t.project1_title}</h3>
              <p className="mt-2 text-sm text-gray-600">{t.project1_desc}</p>
            </a>
            <a href="#project-pb" className="block p-6 bg-white rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">{t.project2_title}</h3>
              <p className="mt-2 text-sm text-gray-600">{t.project2_desc}</p>
            </a>
          </div>

          <section className="mt-10">
            <h3 className="text-xl font-semibold">Visual highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {images.slice(0,6).map((im, idx)=> <ImageCard key={idx} src={IMAGES_PATH+im.file} caption={im.caption} />)}
            </div>
          </section>

          <section id="project-bis" className="mt-10 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">{t.project1_title}</h2>
            <p className="text-gray-700 mt-2">Lead analyst & BI developer. Data warehouse, KPIs, dashboards and ETL.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.filter(im=>im.source && im.source.includes('BIS')).slice(0,6).map((im, i)=>(<ImageCard key={i} src={IMAGES_PATH+im.file} caption={im.caption}/>))}
            </div>
            <a className="inline-block mt-4 bg-blue-600 text-white px-3 py-2 rounded" href="/assets/BIS_Project.docx" download>{lang==='en' ? 'Download full BI project' : 'הורד את הפרויקט'}</a>
          </section>

          <section id="project-pb" className="mt-10 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">{t.project2_title}</h2>
            <p className="text-gray-700 mt-2">Researcher & Simulation Developer. Simulation-based analysis over 588 PB instances.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.filter(im=>im.source && im.source.includes('Final Project')).slice(0,8).map((im, i)=>(<ImageCard key={i} src={IMAGES_PATH+im.file} caption={im.caption}/>))}
            </div>
            <a className="inline-block mt-4 bg-blue-600 text-white px-3 py-2 rounded" href="/assets/Price_of_Abstention.pdf" download>{lang==='en' ? 'Download full paper (PDF)' : 'הורד את המאמר'}</a>
          </section>

          <section className="mt-12">
            <a href="/motivation.html" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded shadow">Motivation Letter</a>
            <a href="/assets/Sagi_CV.docx" className="inline-block ml-3 bg-gray-800 text-white px-4 py-2 rounded shadow" download>{lang==='en' ? 'Download CV' : 'הורד קורות חיים'}</a>
          </section>
        </motion.main>
      </div>
    </div>
  )
}
