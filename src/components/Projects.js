// import websiteImg1 from '../assets/ecommerce-websites.jpg';
// import websiteImg2 from '../assets/website4.jpg';
// import websiteImg3 from '../assets/shopping.jpg';
// import websiteImg4 from '../assets/todoapp.jpg';

// export default function Projects() {

//     const config = {
//         projects : [
//             {
//                 image: websiteImg1,
//                 description: 'A Ecommerce Website. Built with MERN Stack.',
//                 link: 'https://github.com/Rakshana77/ARScart',
//                 deploy:"https://gleeful-mochi-0b9e25.netlify.app/"
//             },
//             {
//                 image: websiteImg2,
//                 description: 'Movie Ticket Booking website.Built with MERN stack',
//                 link: 'https://github.com/Rakshana77/frontend-movies',
//                 deploy:"https://reliable-malabi-02bcc8.netlify.app/",
//             },
//             {
//                 image: websiteImg3,
//                 description: 'Shopping cart . Built with redux',
//                 link: 'https://github.com/Rakshana77/react-redux-new',
//                 deploy:"https://flourishing-pegasus-407622.netlify.app/",
//             },
//              {
//                 image: websiteImg4,
//                 description: 'Todo app.built with httml,css,js',
//                  link: 'https://github.com/Rakshana77/day-14-task',
//                 deploy:"https://bespoke-capybara-8fc4ac.netlify.app/",
//             }
//         ]
//     }

//     return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
//         <div className="w-full">
//             <div className="flex flex-col px-10 py-5">
//                 <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
//                 <p>These are some of my best projects. I have built these with React, MERN stack. Check them out.</p>
//             </div>
//         </div>
//         <div className="w-full">
//             <div className='flex flex-col md:flex-row px-10 gap-5'>
//                 {config.projects.map((project) => (
//                      <div className='relative'>
//                         <img className='h-[200px] w-[500px]' src={project.image} alt='project'/>
//                         <div className='project-desc'>
//                             <p className='text-center px-5 py-5'>{project.description}</p>
//                             <div className='flex justify-center'>
//                                 <a className='btn' target='_blank' href={project.link}  rel="noreferrer" >View Project</a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
               
               
//             </div>
//         </div>
//     </section>
// }

import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/website4.jpg';
import websiteImg3 from '../assets/shopping.jpg';
import websiteImg4 from '../assets/todoapp.jpg';

export default function Projects() {

    const config = {
        projects : [
         
            {
                image: websiteImg2,
                description: 'Movie Ticket Booking website. Built with MERN stack.',
                link: 'https://github.com/Rakshana77/frontend-movies',
                deploy: "https://reliable-malabi-02bcc8.netlify.app/",
            },
            {
                image: websiteImg3,
                description: 'Blog app. Built with Redux.',
                link: 'https://github.com/Rakshana77/my-blog-fe',
                deploy: "https://boisterous-baklava-83bd96.netlify.app/",
            },
            {
                image: websiteImg4,
                description: 'Todo App. Built with MERN stack',
                link: 'https://github.com/Rakshana77/todoapp-fe',
                deploy: "https://shiny-concha-860ab8.netlify.app/",
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built these with React, MERN stack. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} alt='project'/>
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center gap-3'>
                                    <a className='btn' target='_blank' href={project.link} rel="noreferrer">View Project</a>
                                    <a className='btn' target='_blank' href={project.deploy} rel="noreferrer">View Live</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}