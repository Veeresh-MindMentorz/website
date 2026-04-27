import './Blog.css'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import { blogs } from '../data/blogData.js'
import { getBlogIcon } from './Blog.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) {
    return <Navigate to="/blogs" replace />
  }

  const { Icon } = getBlogIcon(blog.icon)

  return (
    <div className="blog-post-page" style={{ paddingTop: '100px', paddingBottom: '60px', background: '#FFFFFF', minHeight: '100vh' }}>
      <Helmet>
        <title>{blog.title} | MindMentorz Chess Academy</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={`https://mindmentorz.com/blogs/${blog.slug}`} />
      </Helmet>

      <div className="container" style={{ paddingBottom: '0' }}>
        <Link 
          to="/blogs" 
          className="back-btn" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#666', textDecoration: 'none', marginBottom: '30px', fontWeight: '500', transition: 'color 0.2s', marginTop: '20px' }}
          onMouseOver={e => e.currentTarget.style.color = blog.color}
          onMouseOut={e => e.currentTarget.style.color = '#666'}
        >
          <ChevronLeft size={18} />
          Back to all blogs
        </Link>
      </div>
        
      <article className="blog-post-article">
        <div className="blog-post-header" style={{ '--blog-color': blog.color }}>
          <div className="container">
            <span className="modal-icon">{blog.icon}</span>
            <div className="modal-tag" style={{ color: blog.color }}>{blog.tag}</div>
            <h1 className="blog-post-title">{blog.title}</h1>
            <div className="modal-meta"><span>⏱ {blog.readTime}</span></div>
          </div>
        </div>
        <div className="container">
          <div className="blog-post-body modal-body-context">
            {blog.content.map((block, i) => {
              if (block.type === 'img') return <img key={i} src={block.src} alt={block.alt || blog.title} className="modal-img" />
              if (block.type === 'h4') return <h1 key={i} className="modal-h4 blog-post-h1" style={{ color: blog.color }}>{block.text}</h1>
              if (block.type === 'p') return <p key={i} className="modal-p blog-post-p">{block.text}</p>
              if (block.type === 'list') return (
                <div key={i} className="modal-list-block">
                  {block.heading && <p className="modal-list-heading">{block.heading}</p>}
                  <ul>{block.items.map(it => <li key={it}>{it}</li>)}</ul>
                </div>
              )
              if (block.type === 'steps') return (
                <div key={i} className="modal-steps">
                  {block.items.map(s => (
                    <div key={s.step} className="modal-step" style={{ borderColor: blog.color + '33' }}>
                      <div className="modal-step-num" style={{ background: blog.color + '18', color: blog.color }}>{s.step}</div>
                      <div><strong>{s.title}</strong><p>{s.desc}</p></div>
                    </div>
                  ))}
                </div>
              )
              if (block.type === 'numbered') return (
                <ol key={i} className="modal-numbered">
                  {block.items.map(it => <li key={it.title}><strong>{it.title}</strong> — {it.desc}</li>)}
                </ol>
              )
              if (block.type === 'compare') return (
                <div key={i} className="modal-compare">
                  <div className="compare-col bad">
                    <h3>{block.left.title}</h3>
                    <ul>{block.left.items.map(it => <li key={it}>{it}</li>)}</ul>
                  </div>
                  <div className="compare-col good">
                    <h3>{block.right.title}</h3>
                    <ul>{block.right.items.map(it => <li key={it}>{it}</li>)}</ul>
                  </div>
                </div>
              )
              if (block.type === 'cta') return (
                <div key={i} className="modal-cta-block">
                  <p><ArrowRight size={16} strokeWidth={2.5} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6, color: '#F8A213' }} /> Want your child to improve faster?</p>
                  <a href="https://skuare.mindmentorz.com/public/register" target="_blank" rel="noopener noreferrer" className="btn-primary"><span>Book a Free Trial →</span></a>
                </div>
              )
              if (block.type === 'gallery') return (
                <div key={i} className="modal-gallery" style={{ marginTop: '20px', marginBottom: '20px' }}>
                  {block.heading && <h2 className="modal-h4" style={{ color: blog.color, fontSize: '1.25rem', marginBottom: '15px' }}>{block.heading}</h2>}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    {block.images.map((img, idx) => (
                      <img key={idx} src={img.src} alt={img.alt} style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }} />
                    ))}
                  </div>
                </div>
              )
              return null
            })}
          </div>
        </div>
      </article>
    </div>
  )
}
