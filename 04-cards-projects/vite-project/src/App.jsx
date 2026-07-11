import React from 'react'
import Card from './components/Card'


const App = () => {
  
  const jobOpenings = [
  {
    "brandlogo": "https://imgs.search.brave.com/HxW9sDuCtSl8KRtjvfXSg94_af8wWiAuZf5FjiFrG8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzE0OC9zbWFs/bC9nb29nbGUtbG9n/by1jaXJjdWxhci1n/bG9zc3ktaWNvbi13/aXRoLXRyYW5zcGFy/ZW50LWJhY2tncm91/bmQtZnJlZS1wbmcu/cG5n",
    "nameofcompany": "Google",
    "dateposted": "3 days ago",
    "post": "Staff Software Engineer, Cloud Migration",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 135.50,
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    "nameofcompany": "Amazon",
    "dateposted": "1 week ago",
    "post": "Software Development Engineer II",
    "tag1": "Full time",
    "tag2": "Mid level",
    "pay": 95.00,
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/FdAgPee9X3JxDHB9BWicoFJld0rG1rl6axd3veS9NVA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1L2Zk/L2MzLzg1ZmRjMzVh/ODNmM2YxYTg4ZjZl/YjgxMDFkMjhhYmMz/LmpwZw",
    "nameofcompany": "Meta",
    "dateposted": "5 days ago",
    "post": "Front-End Engineer Intern",
    "tag1": "Part time",
    "tag2": "Junior level",
    "pay": 65.00,
    "location": "Menlo Park, USA"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    "nameofcompany": "Apple",
    "dateposted": "2 weeks ago",
    "post": "Senior AI Strategy & Solutions Architect",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 165.00,
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/Si3wXKIXur_S1jxe8FwSPOQGe7jhwHGPxiYymh2Jq60/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC85/Mi8xMC9taWNyb3Nv/ZnQtc29mdHdhcmUt/bG9nby1icmFuZC1z/eW1ib2wtZGVzaWdu/LXZlY3Rvci00NjQw/OTIxMC5qcGc",
    "nameofcompany": "Microsoft",
    "dateposted": "4 days ago",
    "post": "Support Engineer (Contract)",
    "tag1": "Part time",
    "tag2": "Junior level",
    "pay": 45.00,
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/sDEBSG9EiEMhEsd1ekNzT8J7t32S330REkUUR0JV6B0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L05ldGZsaXhf/MjAxNl9OX2xvZ28u/c3Zn",
    "nameofcompany": "Netflix",
    "dateposted": "10 days ago",
    "post": "Senior Data Engineer, Core Algorithms",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 185.00,
    "location": "Los Gatos, USA"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/HxW9sDuCtSl8KRtjvfXSg94_af8wWiAuZf5FjiFrG8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzE0OC9zbWFs/bC9nb29nbGUtbG9n/by1jaXJjdWxhci1n/bG9zc3ktaWNvbi13/aXRoLXRyYW5zcGFy/ZW50LWJhY2tncm91/bmQtZnJlZS1wbmcu/cG5n",
    "nameofcompany": "Google",
    "dateposted": "2 days ago",
    "post": "Software Engineer - Graduate 2026",
    "tag1": "Full time",
    "tag2": "Junior level",
    "pay": 72.00,
    "location": "Gurugram, India"
  },      
  {
    "brandlogo": "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    "nameofcompany": "Amazon",
    "dateposted": "6 days ago",
    "post": "Virtual Technical Support Associate",
    "tag1": "Part time",
    "tag2": "Junior level",
    "pay": 28.50,
    "location": "Remote, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/1RAvTlJ7KeWDAeM2MK2IikvxddNoB7Vto2Sbd3hMvPU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81MzMv/MzQ3L0hELXdhbGxw/YXBlci1udmlkaWEt/bG9nby1ncmVlbi1i/YWNrZ3JvdW5kLWJy/YW5kcy1jcmVhdGl2/ZS1hcnQtbnZpZGlh/LWxvZ28tdGh1bWJu/YWlsLmpwZw",
    "nameofcompany": "NVIDIA",
    "dateposted": "3 weeks ago",
    "post": "Principal Hardware Design Verification Engineer",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 195.00,
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://imgs.search.brave.com/Si3wXKIXur_S1jxe8FwSPOQGe7jhwHGPxiYymh2Jq60/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC85/Mi8xMC9taWNyb3Nv/ZnQtc29mdHdhcmUt/bG9nby1icmFuZC1z/eW1ib2wtZGVzaWdu/LXZlY3Rvci00NjQw/OTIxMC5qcGc",
    "nameofcompany": "Microsoft",
    "dateposted": "12 days ago",
    "post": "Research Scientist, Generative AI",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 150.00,
    "location": "Redmond, USA"
  }
]





  

  return (
    <div className='parent'>

      {/* <Card imgSrc="https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc" alt="" />
      <Card imgSrc1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYGHTAfF92Yyp7WfZNgbe6YmktIW0Rxr_J_kG6daeU64KIUzYSZBBqhc&s=10"/>
      <Card /> 
      */}

      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.nameofcompany} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandlogo} dateposted={elem.dateposted}/> 
        </div>
      })}

    </div>
  )
}

export default App
