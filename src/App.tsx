import React, { useState } from 'react';
import { Download, Mail, Linkedin, Menu, X, ChevronDown, Phone, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ritik Jain_Resume.pdf'; // Update with actual path to the resume file
    link.download = 'Ritik_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/Architectural Portfolio - Ritik Jain.pdf'; // Update with actual path to the portfolio file
    link.download = 'Architectural_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    // Scroll to portfolio detail section
    const element = document.getElementById('portfolio-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sample portfolio projects
  const portfolioProjects = [
    {
      id: 'project1',
      title: 'Urban Mixed-Use Development',
      description: 'A sustainable 15-story commercial complex with integrated green spaces',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: 'This mixed-use development features retail spaces on the ground floor, office spaces in the middle floors, and residential units on the top floors. The design incorporates sustainable elements such as green roofs, solar panels, and rainwater harvesting systems.'
    },
    {
      id: 'project2',
      title: 'Residential Community',
      description: 'Modern housing community with shared amenities and green spaces',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: 'This residential community project includes 50 housing units arranged around central green spaces and community facilities. The design emphasizes natural light, cross-ventilation, and connection to outdoor spaces.'
    },
    {
      id: 'project3',
      title: 'Cultural Center',
      description: 'Contemporary cultural center with flexible exhibition spaces',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: 'This cultural center features flexible exhibition spaces, an auditorium, workshops, and a library. The design uses natural materials and creates a dialogue between indoor and outdoor spaces.'
    },
    {
      id: 'project4',
      title: 'Educational Campus',
      description: 'Modern educational facility with innovative learning spaces',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: 'This educational campus includes classrooms, laboratories, a library, and recreational facilities. The design promotes collaborative learning and flexibility in teaching methods.'
    },
    {
      id: 'project5',
      title: 'Sustainable Office Tower',
      description: 'Net-zero energy office building with biophilic design elements',
      image: 'https://images.unsplash.com/photo-1545043059-951e55bf9033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: 'This 25-story office tower incorporates cutting-edge sustainable technologies including a double-skin facade, integrated photovoltaics, and advanced building management systems. The design prioritizes occupant wellbeing with abundant natural light, indoor gardens, and flexible workspaces.'
    },
    {
      id: 'project6',
      title: 'Public Transit Hub',
      description: 'Multi-modal transportation center connecting urban districts',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: 'This transportation hub integrates bus, light rail, and bicycle infrastructure with commercial and public spaces. The design creates a seamless flow between different modes of transport while providing community amenities and retail opportunities.'
    }
  ];

  // Get the selected project details
  const selectedProjectDetails = selectedProject 
    ? portfolioProjects.find(project => project.id === selectedProject) 
    : null;

  return (
    <div className="min-h-screen bg-[#F5F0F3] text-gray-900 font-sans">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold">Ritik Jain</span>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="bg-white py-4 px-6 shadow-lg">
            <ul className="space-y-4">
              <li><button onClick={() => handleScroll('home')} className="w-full text-left py-2">Home</button></li>
              <li><button onClick={() => handleScroll('about')} className="w-full text-left py-2">About</button></li>
              <li><button onClick={() => handleScroll('skills')} className="w-full text-left py-2">Skills</button></li>
              <li><button onClick={() => handleScroll('experience')} className="w-full text-left py-2">Experience</button></li>
              <li><button onClick={() => handleScroll('education')} className="w-full text-left py-2">Education</button></li>
              <li><button onClick={() => handleScroll('portfolio')} className="w-full text-left py-2">Portfolio</button></li>
              <li><button onClick={() => handleScroll('contact')} className="w-full text-left py-2">Contact</button></li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Ritik Jain</span>
            <ul className="flex space-x-8">
              <li><button onClick={() => handleScroll('home')} className={`py-2 ${activeSection === 'home' ? 'border-b-2 border-black' : ''}`}>Home</button></li>
              <li><button onClick={() => handleScroll('about')} className={`py-2 ${activeSection === 'about' ? 'border-b-2 border-black' : ''}`}>About</button></li>
              <li><button onClick={() => handleScroll('skills')} className={`py-2 ${activeSection === 'skills' ? 'border-b-2 border-black' : ''}`}>Skills</button></li>
              <li><button onClick={() => handleScroll('experience')} className={`py-2 ${activeSection === 'experience' ? 'border-b-2 border-black' : ''}`}>Experience</button></li>
              <li><button onClick={() => handleScroll('education')} className={`py-2 ${activeSection === 'education' ? 'border-b-2 border-black' : ''}`}>Education</button></li>
              <li><button onClick={() => handleScroll('portfolio')} className={`py-2 ${activeSection === 'portfolio' ? 'border-b-2 border-black' : ''}`}>Portfolio</button></li>
              <li><button onClick={() => handleScroll('contact')} className={`py-2 ${activeSection === 'contact' ? 'border-b-2 border-black' : ''}`}>Contact</button></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[#E5F6F3] text-black pt-16 md:pt-0">
        <div className="container mx-auto px-6 py-16 text-center">
          <p className="text-xl md:text-2xl mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ritik Jain</h1>
          <p className="text-xl md:text-2xl mb-8">Construction Management</p>
          <p className="text-md md:text-lg mb-12 max-w-3xl mx-auto">
            Design and Analysis | Budgeting | Schematic Diagrams | Scheduling | Research Skills | AutoCAD | Revit | Sketch Up | RS Means | BIM 360 | MEP | Estimation | Navisworks Manage | Primavera | Bluebeam Revu
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              className="bg-white text-black px-8 py-3 rounded-none flex items-center hover:bg-gray-200 transition duration-300"
              onClick={handleDownloadResume}
            >
              <Download size={20} className="mr-2" /> Download Resume
            </button>
            
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="https://www.linkedin.com/in/ritikprafuljain/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-black hover:text-gray-300 transition duration-300">
              <Linkedin size={20} className="mr-2" /> LinkedIn
            </a>
            <a href="mailto:ritikjain2800@gmail.com" className="flex items-center justify-center text-black hover:text-gray-300 transition duration-300">
              <Mail size={20} className="mr-2" /> ritikjain2800@gmail.com
            </a>
            <a href="tel:8177769790" className="flex items-center justify-center text-black hover:text-gray-300 transition duration-300">
              <Phone size={20} className="mr-2" /> (817) 776-9790
            </a>
          </div>
          
          <div className="mt-16">
            <button onClick={() => handleScroll('about')} className="animate-bounce">
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#E5F6F3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Management" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg mb-6">
                With a Master's in Construction Management and a Bachelor's in Architecture, I bring a unique blend of technical and creative expertise to the world of digital construction.
              </p>
              <p className="text-lg mb-6">
                I specialize in refining BIM workflows and elevating project coordination using Revit, Navisworks, BIM 360, Rhino, and Bluebeam Revu tools. My roles at PDP Architects and Nashik Smart City allowed me to reduce design conflicts and implement cost-saving strategies effectively.
              </p>
              <p className="text-lg">
                I'm dedicated to integrating cutting-edge technology with strategic planning to support efficient, innovative project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#F5F0F3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skills</h2>
          <p className="text-xl text-center mb-12">Work Experience: 2 Years</p>
          
          <div className="md:flex">
            {/* Software Skills */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-6 text-center">SOFTWARE SKILLS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Autodesk Revit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>AutoCAD</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>BIM 360</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Navisworks Manage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Bluebeam Revu</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Primavera P6</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>HCSS Heavy Bid</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Procore</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Sketchup</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Enscape</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Rhinoceros 3D</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Fenestra Pro</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Lumion</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Twinmotion</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>V-Ray</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Insight360</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Microsoft Office Suite</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Smartsheet</span>
                </div>
              </div>
            </div>
            
            {/* Professional Skills */}
            <div className="md:w-1/2 md:pl-8 md:border-l border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-center">PROFESSIONAL SKILLS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Scheduling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Cost Estimation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Traffic Engineering</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Building Information Modeling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Field Operations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Negotiation Skills</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Construction Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Time Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Field Supervision</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Budgeting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Contract Compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Oversight</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Change Order</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Submittal Supervision</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span>Project Coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#E5F6F3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-16">
            {/* Experience Item 1 */}
            <div className="border-l-4 border-black pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-0"></div>
              <h3 className="text-2xl font-bold">Volunteer Project Estimator</h3>
              <p className="text-lg text-gray-600 mb-4">The University of Texas at Arlington, Arlington, TX | Jan 2024 – Dec 2024</p>
              <ul className="list-disc pl-5 text-lg space-y-2">
                <li>Prepared detailed cost estimates, bid proposals, and quantity takeoffs for commercial and infrastructure projects ranging from $1M to $50M.</li>
                <li>Analyzed construction blueprints, specifications, and material costs, ensuring accurate cost projections with a variance of less than 3% from final project costs.</li>
                <li>Operated estimating software such as Bluebeam, Planswift, and Excel-based models to streamline calculations, reducing manual errors by 20%. Implemented WBS and CBS for project, optimizing budget forecasting and resource allocation.</li>
                <li>Coordinated pre-bid and contract negotiations, ensuring compliance and identifying cost risks and savings.</li>
                <li>Collaborated with project managers, engineers, and clients to refine estimates, evaluate design alternatives, and support value engineering efforts, achieving up to $500K in savings per project.</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="border-l-4 border-black pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-0"></div>
              <h3 className="text-2xl font-bold">Volunteer Research Assistant</h3>
              <p className="text-lg text-gray-600 mb-4">CUIRE, Arlington, TX | Aug 2023 – Dec 2023</p>
              <ul className="list-disc pl-5 text-lg space-y-2">
                <li>Conducted comprehensive evaluations on performance metrics from more than 50 polymeric SIPP pipe burst tests; utilized findings to enhance testing protocols, ensuring superior quality assurance throughout all research activities.</li>
                <li>Facilitated the development of trenchless renewal techniques (CIPP, SAPL, slip lining), contributed to micro tunneling and HDD infrastructure evaluations, improved project scope accuracy, documentation, technical reporting, and ensured industry standards.</li>
              </ul>
            </div>

            {/* Experience Item 3 */}
            <div className="border-l-4 border-black pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-0"></div>
              <h3 className="text-2xl font-bold">Infrastructure Project Engineer</h3>
              <p className="text-lg text-gray-600 mb-4">Nashik Municipal Smart City Development Corp. Ltd; India | Jan 2023 – Jul 2023</p>
              <ul className="list-disc pl-5 text-lg space-y-2">
                <li>Supervised on-site operations for a 20-acre urban infrastructure project ($3.5M), including 5 miles of internal road, traffic control, and utility networks. Moderated 25+ contractors and subcontractors work on-site, coordinated with local authorities for permits, jobsite mobilization, and ensured completion within a 6-month deadline.</li>
                <li>Planned project schedules in Primavera P6, creating WBS; implemented traffic control measure and reducing delays by 12%.</li>
                <li>Implemented Bluebeam Revu for digital plan management, document control, and team collaboration, improving communication by 25% and expediting approvals, while optimizing BIM models with Autodesk Revit, reducing design conflicts by 15%, and applying cost-efficiency strategies, saving $112,600 through material reuse and contract renegotiation.</li>
                <li>Superintended QA/QC processes, including asphalt compaction tests and pavement inspections, ensuring compliance with safety regulations and maintaining a 100% workplace safety record with zero incidents.</li>
              </ul>
            </div>

            {/* Experience Item 4 */}
            <div className="border-l-4 border-black pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-0"></div>
              <h3 className="text-2xl font-bold">Assistant Architectural Project Engineer</h3>
              <p className="text-lg text-gray-600 mb-4">PDP Architects, India | Jan 2022 – Dec 2022</p>
              <ul className="list-disc pl-5 text-lg space-y-2">
                <li>Led project for a 15-story - 180,000 sq. ft. mixed-use commercial building ($6 million budget), overseeing RFIs, submittals, punch lists, quantity takeoff project documentation, tracking logs (concrete, rebar, procurement schedule, change orders), ensuring completion 10 days ahead of schedule and resolving site issues promptly.</li>
                <li>Managed detailed project schedule and cost projections using Primavera P6, optimizing budget by 5% and resource allocation.</li>
                <li>Drafted architectural drawings and 3D BIM models for 6 projects using Autodesk Revit, conducting design reviews and clash detection, which reduced design conflicts by 20% and accelerated project approvals.</li>
                <li>Collaborated with stakeholders, chaired subcontractor startup meetings, and ensured smooth execution of construction phases, saving $23,300. Tracked material procurement, vendor negotiations and payment processes, and managing payments for a 98% on-time payment rate, resulting in a 25% improved workflow efficiency and a 95% client satisfaction rate.</li>
              </ul>
            </div>

            {/* Experience Item 5 */}
            <div className="border-l-4 border-black pl-8 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-0"></div>
              <h3 className="text-2xl font-bold">Architectural Intern [Curricular Practical Training Program]</h3>
              <p className="text-lg text-gray-600 mb-4">PDP Architects, India | Jun 2021 – Jan 2022</p>
              <ul className="list-disc pl-5 text-lg space-y-2">
                <li>Played a key role in conceptual, schematic, and design development phases, ensuring construction regulations, while coordinating project closeout documentation, final site inspection and compliance approvals that resulted in gaining construction experience.</li>
                <li>Conducted project coordination meetings, worked with authorities for inspection and compliance requirements. Developed design plans using AutoCAD and Revit-based working drawings.</li>
                <li>Prepared project bid documentation, contract specifications, schedules, drawings, and financial reports, using cloud-based project management tools, ensuring timely project delivery that resulted in reducing cost by 10% and administrative errors by 15%.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-[#F5F0F3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          
          <div className="space-y-12">
            {/* Education Item 1 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold">Master of Construction Management</h3>
                <p className="text-lg text-gray-600">The University of Texas at Arlington, Arlington, TX</p>
                <p className="text-lg text-gray-600 mb-4">Aug 2023 – May 2025</p>
              </div>
              <div className="md:w-2/3 mt-4 md:mt-0">
                <h4 className="text-xl font-bold mb-2">Courses</h4>
                <ul className="list-disc pl-5 text-lg">
                  <li>Construction Planning & Scheduling</li>
                  <li>Building Information Modeling</li>
                  <li>Construction Methods - Field Operations</li>
                  <li>Construction Cost Estimating</li>
                  <li>Construction Finance, Risk Management</li>
                  <li>Construction Productivity & Value Engineering</li>
                  <li>Construction Contracts Specification and Project Administration</li>
                  <li>Construction Project Acquisition</li>
                  <li>Construction Materials</li>
                </ul>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold">Bachelor of Architecture</h3>
                <p className="text-lg text-gray-600">Savitribai Phule Pune University, Pune, India</p>
                <p className="text-lg text-gray-600 mb-4">Aug 2017 – Jun 2022</p>
              </div>
              <div className="md:w-2/3 mt-4 md:mt-0">
                <h4 className="text-xl font-bold mb-2">Courses</h4>
                <ul className="list-disc pl-5 text-lg">
                  <li>Architectural Design, Building Construction & Materials</li>
                  <li>Building Utility & Services, Theory of Structures</li>
                  <li>Working Drawing, Computer Aided Drawing & Graphics</li>
                  <li>Urban Studies, Quantity Surveying & Specification Writing</li>
                  <li>Project Management, Landscape Architecture</li>
                  <li>Environmental Science & Sustainable, History of Arch & Culture</li>
                  <li>Site Survey and Analysis, Climatology</li>
                  <li>Research in Architecture, Entrepreneurship Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Portfolio Section*/}
      <section id="portfolio" className="py-20 bg-[#E5F6F3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Architectural Portfolio</h2>

          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-none flex items-center mx-auto hover:bg-gray-800 transition duration-300"
            onClick={handleDownloadPortfolio} >
              <Download size={20} className="mr-2" /> Download Complete Portfolio
            </button>
          </div>


          {/*
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioProjects.map(project => (
              <div 
                key={project.id} 
                className="group relative cursor-pointer overflow-hidden"
                onClick={() => handleProjectClick(project.id)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white">{project.description}</p>
                  <div className="flex items-center mt-2 text-white">
                    <span className="mr-2">View Details</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-none flex items-center mx-auto hover:bg-gray-800 transition duration-300">
              <Download size={20} className="mr-2" /> Download Complete Portfolio
            </button>
          </div>  */}
        </div>
      </section>

      {/* Portfolio Detail Section */}
      {selectedProject && (
        <section id="portfolio-detail" className="py-20 bg-[#F5F0F3]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{selectedProjectDetails?.title}</h2>
            
            <div className="md:flex items-start">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src={selectedProjectDetails?.image} 
                  alt={selectedProjectDetails?.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <p className="text-lg mb-6">{selectedProjectDetails?.details}</p>
                
                <h3 className="text-2xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold">Project Type</h4>
                    <p>Commercial Architecture</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Location</h4>
                    <p>Nashik, India</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Year</h4>
                    <p>2022</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Tools Used</h4>
                    <p>Revit, AutoCAD, Navisworks, Bluebeam Revu</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 bg-black text-white px-6 py-2 hover:bg-gray-800 transition duration-300"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#E5F6F3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact</h2>
          
          <div className="md:flex">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              

              <div className="flex items-center mb-4">
                <a href="tel:8177769790" className="flex items-center justify-center text-lg text-black hover:text-gray-300 transition duration-300">
              <Phone size={24} className="mr-2" />   (817) 776-9790
            </a>
              </div>
              <div className="flex items-center mb-4">
                <a href="mailto:ritikjain2800@gmail.com" className="flex items-center justify-center text-lg text-black hover:text-gray-300 transition duration-300">
              <Mail size={24} className="mr-2" />   ritikjain2800@gmail.com
            </a>
              </div>
              
              <div className="flex items-center mb-4">
                <Linkedin size={24} className="mr-4" />
                <a href="https://www.linkedin.com/in/ritikprafuljain/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-600">linkedin.com/in/ritikprafuljain</a>
              </div>
              
              
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full p-3 border border-gray-300 focus:border-black outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full p-3 border border-gray-300 focus:border-black outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 focus:border-black outline-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Ritik Jain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;