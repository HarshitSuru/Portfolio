import React, { useState, useEffect, useRef } from 'react';
import {
    Code,
    Terminal,
    Cpu,
    Globe,
    Layout,
    Database,
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
    Layers,
    Activity,
    MessageSquare,
    ShoppingCart,
    Menu,
    X,
    Server,
    Box,
    Award,
    BookOpen,
    Phone,
    Hash,
    FileJson,
    FileCode,
    FileText,
    Download,
    Printer,
    Mic
} from 'lucide-react';

const COLORS = {
    cream: '#F8F4EC',
    beige: '#E8DFC8',
    taupe: '#C8B8A0',
    charcoal: '#5B5042',
    espresso: '#2F2722',
};

// --- Resume Modal Component ---
const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-[#2F2722]/80 backdrop-blur-sm">
            <div className="bg-white w-full max-w-4xl h-full max-h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Modal Header (Toolbar) */}
                <div className="bg-[#5B5042] text-[#F8F4EC] px-6 py-4 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2">
                        <FileText size={20} />
                        <span className="font-bold tracking-widest uppercase">Harshit_Resume.pdf</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* <button
                            onClick={() => window.print()}
                            className="flex items-center gap-2 hover:text-[#C8B8A0] transition-colors text-sm font-bold uppercase"
                        >
                            <Printer size={16} />
                            <span className="hidden sm:inline">Print</span>
                        </button> */}
                        <button onClick={onClose} className="hover:text-[#C8B8A0] transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Resume Content (Scrollable) */}
                <div className="flex-grow overflow-y-auto p-8 sm:p-12 bg-white text-[#2F2722] font-sans selection:bg-[#E8DFC8]">
                    <div className="max-w-3xl mx-auto space-y-6 print:max-w-none">

                        {/* Header */}
                        <header className="border-b-2 border-[#2F2722] pb-6 mb-6 text-center">
                            <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">Harshit Suru</h1>
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-[#5B5042]">
                                <span>suruharshit2005@gmail.com</span>
                                <span>|</span>
                                <span>+91 90592 27008</span>
                                <span>|</span>
                                <span>Hyderabad</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-[#5B5042] mt-2 uppercase">
                                <a href="https://linkedin.com/in/suruharshit" className="hover:text-black hover:underline">LinkedIn</a>
                                <span>•</span>
                                <a href="https://github.com/HarshitSuru" className="hover:text-black hover:underline">GitHub</a>
                                <span>•</span>
                                <a href="#" className="hover:text-black hover:underline">LeetCode</a>
                            </div>
                        </header>

                        {/* Bio */}
                        <section>
                            <p className="text-sm leading-relaxed text-justify">
                                Highly motivated and results-driven Computer Science student with strong fundamentals in software engineering, object-oriented programming, and full-stack (MERN) web development. Proficient in Data Structures and Algorithms with consistent problem-solving practice on LeetCode, showcasing strong analytical and logical thinking skills.
                            </p>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-[#C8B8A0] mb-3 pb-1">Education</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold">MLR Institute of Technology, Hyderabad</h4>
                                        <p className="text-sm">B.Tech in Computer Science and Engineering</p>
                                    </div>
                                    <div className="text-right text-sm">
                                        <p className="font-mono font-bold">Nov 2022 - May 2026</p>
                                        <p>CGPA: 9.20/10</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold">Narayana Junior College</h4>
                                        <p className="text-sm">MPC (Maths, Physics, Chemistry)</p>
                                    </div>
                                    <div className="text-right text-sm">
                                        <p className="font-mono font-bold">Nov 2020 - Jun 2022</p>
                                        <p>Percentage: 98.7%</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-[#C8B8A0] mb-3 pb-1">Technical Skills</h3>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                                <p><span className="font-bold">Languages:</span> Java, HTML, CSS, JavaScript</p>
                                <p><span className="font-bold">Web Tech:</span> React.js, REST APIs, Node.js, Express.js</p>
                                <p><span className="font-bold">Databases:</span> MySQL, MongoDB</p>
                                <p><span className="font-bold">Core Concepts:</span> Data Structures & Algorithms, OOPs, OS, DBMS</p>
                                <p><span className="font-bold">Tools:</span> Git, GitHub</p>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-[#C8B8A0] mb-3 pb-1">Personal Projects</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between font-bold">
                                        <h4>TripNest</h4>
                                        <span className="text-xs bg-[#E8DFC8] px-2 py-0.5 rounded-none">MERN Stack</span>
                                    </div>
                                    <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-[#5B5042]">
                                        <li>Engineered a dynamic travel platform where users can register, log in, browse destinations, and review.</li>
                                        <li>Implemented secure user authentication and session management using Passport.js.</li>
                                        <li>Enabled property owners to list and manage their travel destinations.</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex justify-between font-bold">
                                        <h4>Heart Disease Prediction System</h4>
                                        <span className="text-xs bg-[#E8DFC8] px-2 py-0.5 rounded-none">Python, ML</span>
                                    </div>
                                    <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-[#5B5042]">
                                        <li>Machine learning-based application to predict likelihood of heart disease using health metrics.</li>
                                        <li>Trained and evaluated a predictive model achieving 92% accuracy.</li>
                                        <li>Streamlined the diagnostic process for healthcare professionals.</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex justify-between font-bold">
                                        <h4>Interview Preparation Partner - Voice Based AI Agent</h4>
                                        <span className="text-xs bg-[#E8DFC8] px-2 py-0.5 rounded-none">AI, Voice, Python</span>
                                    </div>
                                    <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-[#5B5042]">
                                        <li>Developed a voice-first AI mock interview system that behaves like a real interviewer.</li>
                                        <li>Asks role-specific, dynamically generated questions using adaptive conversational logic.</li>
                                        <li>Listens to user responses through voice input and evaluates them using NLP techniques.</li>
                                        <li>Generates structured feedback and improvement tips upon completion.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Achievements & Certifications */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-[#C8B8A0] mb-3 pb-1">Achievements & Certifications</h3>
                            <ul className="list-disc list-inside text-sm space-y-2 text-[#5B5042]">
                                <li><span className="font-bold text-[#2F2722]">Winner - Innovation Challenge:</span> Centre for Innovation and Entrepreneurship, MLRIT.</li>
                                <li><span className="font-bold text-[#2F2722]">Certified Smart Coder:</span> Data Structures and Algorithms by Smart Interviews.</li>
                                <li><span className="font-bold text-[#2F2722]">Global Rank 4438:</span> Smart Interviews DSA contest (out of 43k+ participants).</li>
                                <li><span className="font-bold text-[#2F2722]">LeetCode:</span> Solved 195+ DSA problems in Java.</li>
                                <li><span className="font-bold text-[#2F2722]">NPTEL Certified:</span> Cloud Computing (2024).</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            {/* Print Styles */}
            <style>{`
        @media print {
          @page { margin: 0; }
          body * { visibility: hidden; }
          .fixed { position: absolute; inset: 0; background: white; }
          .fixed * { visibility: visible; }
          .fixed header, .fixed .bg-\\[\\#5B5042\\] { display: none; } /* Hide modal toolbar */
          .overflow-y-auto { overflow: visible; height: auto; }
        }
      `}</style>
        </div>
    );
};

// --- Helper Components ---

const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest border-l-4 pl-4 border-[#5B5042] text-[#2F2722]">
        {children}
    </h2>
);

const Tag = ({ text }) => (
    <span className="text-xs font-mono bg-[#C8B8A0] text-[#2F2722] px-2 py-1 uppercase tracking-wider mr-2 mb-2 inline-block hover:bg-[#5B5042] hover:text-[#F8F4EC] transition-colors duration-300 cursor-default">
        {text}
    </span>
);

// --- Hero Section: Dynamic Code Editor ---

const JavaCodeEditor = () => {
    const [activeTab, setActiveTab] = useState('Math.java');
    const [displayedContent, setDisplayedContent] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    const files = {
        'Math.java': {
            lang: 'java',
            icon: <Hash size={14} className="text-orange-400" />,
            content: `public class MathUtils {
    public int solve(int[] data) {
        int sum = 0;
        for(int n : data) sum += n;
        return sum * 42; 
    }
    public static void main(String[] args) {
        System.out.println("Execution: 0.04ms");
    }
}`
        },
        'Style.css': {
            lang: 'css',
            icon: <FileCode size={14} className="text-blue-400" />,
            content: `.portfolio {
    display: flex;
    justify-content: center;
    background: #F8F4EC;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}`
        },
        'Data.json': {
            lang: 'json',
            icon: <FileJson size={14} className="text-yellow-400" />,
            content: `{
    "developer": "Harshit Suru",
    "status": "Open to Work",
    "stack": ["MERN", "Java", "SQL"],
    "location": "Hyderabad",
    "coffee_level": "High"
}`
        }
    };

    const fileKeys = Object.keys(files);

    // Auto-switch tabs every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((current) => {
                const currentIndex = fileKeys.indexOf(current);
                const nextIndex = (currentIndex + 1) % fileKeys.length;
                return fileKeys[nextIndex];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Typewriter Effect
    useEffect(() => {
        // Reset typing state
        setDisplayedContent('');
        setIsTyping(true);
        let index = 0;
        const fullText = files[activeTab].content;

        const typeInterval = setInterval(() => {
            if (index <= fullText.length) {
                // Use slice(0, index) to ensure "public" and "portfolio" are never cut off by state lags
                setDisplayedContent(fullText.slice(0, index));
                index += 1; // Type 3 chars per tick

                // Auto-scroll to bottom
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
            } else {
                clearInterval(typeInterval);
                setIsTyping(false);
            }
        }, 5); // 10ms delay

        return () => clearInterval(typeInterval);
    }, [activeTab]);

    const getHighlightedCode = (code, lang) => {
        // Filter empty lines to ensure no blank lines in console
        return code.split('\n').filter(line => line.length > 0).map((line, i) => (
            <div key={i} className="flex leading-6 hover:bg-[#2F2722]/50 transition-colors">
                {/* Fixed width line number container to prevent misalignment */}
                <span className="w-8 text-right mr-4 text-[10px] pt-1 opacity-50 select-none shrink-0 text-[#C8B8A0]">
                    {i + 1}
                </span>

                {/* Code Content - whitespace-pre to preserve indentation */}
                <span className="text-[#d4d4d4] font-mono break-all whitespace-pre">
                    {line.split(/(\s+|[(){}[\];])/).map((part, idx) => {
                        if (!part) return null;
                        // Syntax Highlighting Logic
                        if (lang === 'java') {
                            if (['public', 'class', 'int', 'void', 'return', 'static', 'for'].includes(part)) return <span key={idx} className="text-[#569cd6]">{part}</span>;
                            if (['MathUtils', 'String', 'System', 'out'].includes(part)) return <span key={idx} className="text-[#4ec9b0]">{part}</span>;
                            if (part.includes('"')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
                        }
                        if (lang === 'css') {
                            if (part.startsWith('.')) return <span key={idx} className="text-[#d7ba7d]">{part}</span>;
                            if (part.includes(':')) return <span key={idx} className="text-[#9cdcfe]">{part}</span>;
                            if (part.includes('#')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
                        }
                        if (lang === 'json') {
                            if (part.includes('"') && part.trim().endsWith(':')) return <span key={idx} className="text-[#9cdcfe]">{part}</span>;
                            if (part.includes('"')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
                        }
                        return <span key={idx}>{part}</span>;
                    })}
                </span>
            </div>
        ));
    };

    return (
        <div className="w-full h-full bg-[#1e1e1e] border-l-4 border-[#C8B8A0] shadow-2xl flex flex-col text-xs font-mono relative group overflow-hidden">
            {/* Editor Header */}
            <div className="bg-[#252526] flex items-center border-b border-[#333] overflow-hidden">
                {fileKeys.map((fileName) => (
                    <button
                        key={fileName}
                        onClick={() => setActiveTab(fileName)}
                        className={`px-4 py-3 flex items-center gap-2 transition-all min-w-[120px] ${activeTab === fileName
                            ? 'bg-[#1e1e1e] text-[#E8DFC8] border-t-2 border-[#C8B8A0]'
                            : 'text-gray-500 hover:bg-[#2d2d2d] hover:text-gray-300'
                            }`}
                    >
                        {files[fileName].icon}
                        <span>{fileName}</span>
                    </button>
                ))}
            </div>

            {/* Editor Body - NO SCROLLBARS */}
            <div
                ref={scrollRef}
                className="p-6 relative flex-grow overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <Code size={100} color="#E8DFC8" />
                </div>

                <div className="font-mono">
                    {getHighlightedCode(displayedContent, files[activeTab].lang)}
                    {isTyping && <span className="animate-pulse inline-block w-2 h-4 bg-[#C8B8A0] ml-1 align-middle"></span>}
                </div>
            </div>

            {/* Editor Footer */}
            <div className="bg-[#2F2722] text-[#C8B8A0] border-t border-[#5B5042] text-[10px] px-3 py-1 flex justify-between items-center z-10">
                <div className="flex gap-4">
                    <span>main*</span>
                    <span>UTF-8</span>
                    <span>Auto-Save</span>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span>Ready</span>
                </div>
            </div>
        </div>
    );
};

// --- Bento Grid Skeletons ---

const SkeletonChat = () => (
    <div className="w-full h-full p-4 flex flex-col gap-2 justify-end opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-3/4 h-8 bg-[#C8B8A0] self-start animate-[pulse_2s_infinite]"></div>
        <div className="w-1/2 h-8 bg-[#5B5042] self-end"></div>
        <div className="w-2/3 h-8 bg-[#C8B8A0] self-start delay-75"></div>
        <div className="w-full h-10 border border-[#5B5042] mt-2 flex items-center px-2">
            <div className="w-1 h-4 bg-[#5B5042] animate-bounce"></div>
        </div>
    </div>
);

const SkeletonDashboard = () => (
    <div className="w-full h-full p-4 flex flex-col gap-2 justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-end justify-between h-24 gap-1">
            {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className={`w-full bg-[#5B5042] transition-all duration-300 group-hover:bg-[#2F2722] delay-[${i * 50}ms]`}></div>
            ))}
        </div>
        <div className="flex gap-2 mt-2">
            <div className="w-1/2 h-16 bg-[#C8B8A0]"></div>
            <div className="w-1/2 h-16 border border-[#5B5042]"></div>
        </div>
    </div>
);

const SkeletonEcommerce = () => (
    <div className="w-full h-full p-4 grid grid-cols-2 gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square border border-[#5B5042] flex flex-col p-1">
                <div className="flex-grow bg-[#C8B8A0] mb-1 group-hover:scale-95 transition-transform duration-300"></div>
                <div className="h-1 w-1/2 bg-[#5B5042]"></div>
            </div>
        ))}
    </div>
);

const SkeletonCode = () => (
    <div className="w-full h-full p-4 flex flex-col gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500 font-mono text-[8px] text-[#5B5042] overflow-hidden">
        <div className="flex gap-1"><span className="text-[#C8B8A0]">import</span> Flask</div>
        <div className="pl-2 border-l border-[#5B5042]">
            <div className="bg-[#C8B8A0] h-2 w-20 mb-1"></div>
            <div className="bg-[#C8B8A0] h-2 w-12 mb-1"></div>
            <div className="bg-[#5B5042] h-2 w-24"></div>
        </div>
        <div className="mt-2 w-8 h-8 border-2 border-[#5B5042] rounded-none animate-spin"></div>
    </div>
);

const SkeletonVoice = () => (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex gap-1 items-center h-16">
            {[1, 2, 3, 4, 5].map((i) => (
                <div
                    key={i}
                    className="w-2 bg-[#5B5042] animate-[pulse_1s_ease-in-out_infinite]"
                    style={{ height: `${Math.random() * 40 + 20}px`, animationDelay: `${i * 0.1}s` }}
                ></div>
            ))}
        </div>
        <div className="mt-4 flex gap-2">
            <div className="w-8 h-8 rounded-none border border-[#5B5042] flex items-center justify-center text-[#5B5042]">
                <Mic size={16} />
            </div>
            <div className="h-8 w-24 bg-[#C8B8A0]"></div>
        </div>
    </div>
);

// --- Main Project Card ---

const BentoItem = ({ title, desc, tags, size = "md", type, link, githubLink }) => {
    const getSkeleton = () => {
        switch (type) {
            case 'chat': return <SkeletonChat />;
            case 'dashboard': return <SkeletonDashboard />;
            case 'commerce': return <SkeletonEcommerce />;
            case 'code': return <SkeletonCode />;
            case 'voice': return <SkeletonVoice />;
            default: return <SkeletonCode />;
        }
    };

    const sizeClasses = {
        sm: "md:col-span-1 md:row-span-1",
        md: "md:col-span-2 md:row-span-1",
        tall: "md:col-span-1 md:row-span-2",
        lg: "md:col-span-2 md:row-span-2",
        xl: "md:col-span-3 md:row-span-2",
    };

    return (
        <div className={`group relative bg-[#E8DFC8] border border-[#C8B8A0] hover:border-[#5B5042] transition-colors duration-300 overflow-hidden flex flex-col ${sizeClasses[size]}`}>
            <div className="absolute inset-0 z-0 p-4 pt-16 pointer-events-none mix-blend-multiply">
                {getSkeleton()}
            </div>

            {/* Main Link Wrapper */}
            <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${title}`}></a>

            <div className="relative z-20 flex flex-col h-full justify-between p-6 bg-gradient-to-b from-[#E8DFC8] via-[#E8DFC8]/90 to-transparent pointer-events-none">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-[#2F2722] uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                            {title}
                        </h3>

                        <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {githubLink && (
                                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#5B5042] hover:text-[#2F2722] pointer-events-auto z-30 p-1 hover:bg-[#C8B8A0]/20 rounded-none transition-colors">
                                    <Github size={18} />
                                </a>
                            )}
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#5B5042] hover:text-[#2F2722] pointer-events-auto z-30 p-1 hover:bg-[#C8B8A0]/20 rounded-none transition-colors">
                                <ArrowUpRight size={20} />
                            </a>
                        </div>
                    </div>
                    <p className="text-[#5B5042] text-sm mb-4 leading-relaxed max-w-[90%]">
                        {desc}
                    </p>
                </div>
                <div className="flex flex-wrap mt-auto pt-4 border-t border-[#C8B8A0]/50">
                    {tags.map((tag, i) => <Tag key={i} text={tag} />)}
                </div>
            </div>
        </div>
    );
};

// --- Unified Timeline Item (For Education & Achievements) ---

const TimelineItem = ({ title, subtitle, date, description, icon }) => (
    <div className="flex gap-6 group relative">
        {/* Timeline Line */}
        <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-none border border-[#5B5042] bg-[#E8DFC8] flex items-center justify-center text-[#5B5042] z-10 group-hover:bg-[#5B5042] group-hover:text-[#F8F4EC] transition-colors duration-300">
                {icon}
            </div>
            <div className="w-[1px] flex-grow bg-[#C8B8A0] group-hover:bg-[#5B5042] transition-colors my-2"></div>
        </div>

        {/* Content */}
        <div className="pb-8 pt-1 flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <div>
                    <h4 className="text-lg font-bold text-[#2F2722] uppercase tracking-wide">{title}</h4>
                    <div className="text-sm text-[#5B5042] font-bold">{subtitle}</div>
                </div>
                {date && (
                    <span className="text-xs font-mono bg-[#C8B8A0] px-2 py-1 text-[#2F2722] whitespace-nowrap self-start">
                        {date}
                    </span>
                )}
            </div>

            <p className="text-[#5B5042] text-sm leading-relaxed font-mono opacity-80 border-l-2 border-[#C8B8A0] pl-4 mt-2 group-hover:border-[#5B5042] transition-colors">
                {description}
            </p>
        </div>
    </div>
);

// --- Main App Component ---

export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen bg-[#F8F4EC] text-[#2F2722] font-sans selection:bg-[#C8B8A0] selection:text-[#2F2722] overflow-x-hidden">

            {/* Resume Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#C8B8A0] bg-[#F8F4EC]/95 backdrop-blur-sm py-6">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-widest uppercase border-2 border-[#2F2722] px-3 py-1 hover:bg-[#2F2722] hover:text-[#F8F4EC] transition-colors cursor-pointer">
                        Harshit Suru
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest hover:text-[#C8B8A0] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5B5042] transition-all group-hover:w-full"></span>
                            </a>
                        ))}

                        {/* Resume Button */}
                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="flex items-center gap-2 bg-[#5B5042] text-[#F8F4EC] px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#2F2722] transition-colors"
                        >
                            <FileText size={14} />
                            Resume
                        </button>
                    </div>

                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#F8F4EC] pt-24 px-6 md:hidden">
                    <div className="flex flex-col gap-6 text-2xl font-bold uppercase">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="border-b border-[#C8B8A0] pb-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setIsResumeOpen(true);
                                setMobileMenuOpen(false);
                            }}
                            className="border-b border-[#C8B8A0] pb-2 flex items-center gap-2 text-[#5B5042] w-full text-left"
                        >
                            <FileText />
                            View Resume
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center scroll-mt-32">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Text */}
                    <div className="space-y-8 animate-in slide-in-from-left duration-1000 fade-in">
                        <div className="inline-block bg-[#E8DFC8] px-4 py-2 border-l-2 border-[#5B5042] text-sm font-mono text-[#5B5042]">
                            DSA ENTHUSIAST & DEVELOPER
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2F2722]">
                            HARSHIT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5042] to-[#C8B8A0]">SURU</span>
                        </h1>
                        <p className="text-lg text-[#5B5042] max-w-md leading-relaxed">
                            Motivated Computer Science student with strong fundamentals in software engineering and full-stack development. Experienced with Java, SQL, web technologies, and active in competitive coding.
                        </p>

                        <div className="flex gap-4">
                            <a href="#projects" className="bg-[#2F2722] text-[#F8F4EC] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#5B5042] transition-colors border-2 border-[#2F2722]">
                                View Projects
                            </a>
                            <a href="#contact" className="bg-transparent text-[#2F2722] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#E8DFC8] transition-colors border-2 border-[#2F2722]">
                                Contact Me
                            </a>
                        </div>

                        <div className="flex gap-6 pt-8 text-[#5B5042]">
                            <a href="https://github.com/HarshitSuru" target="_blank" rel="noreferrer"><Github className="cursor-pointer hover:text-[#2F2722] hover:scale-110 transition-all" /></a>
                            <a href="https://linkedin.com/in/suruharshit" target="_blank" rel="noreferrer"><Linkedin className="cursor-pointer hover:text-[#2F2722] hover:scale-110 transition-all" /></a>
                            <a href="mailto:suruharshit2005@gmail.com"><Mail className="cursor-pointer hover:text-[#2F2722] hover:scale-110 transition-all" /></a>
                        </div>
                    </div>

                    {/* Right: Code Editor */}
                    <div className="h-[500px] w-full relative animate-in slide-in-from-right duration-1000 fade-in hidden lg:block">
                        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C8B8A0] z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#E8DFC8] z-0"></div>
                        <div className="relative z-10 w-full h-full">
                            <JavaCodeEditor />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section Strip */}
            <section id="skills" className="bg-[#2F2722] text-[#F8F4EC] py-24 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1 border-r border-[#5B5042] flex items-center h-full">
                        <h3 className="text-2xl font-bold text-[#C8B8A0]">TECHNICAL SKILLS</h3>
                    </div>
                    <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Code />, title: "Languages", items: "Java, JavaScript, HTML, CSS" },
                            { icon: <Globe />, title: "Web Tech", items: "React.js, Node.js, REST APIs" },
                            { icon: <Database />, title: "Databases", items: "MySQL, MongoDB" },
                            { icon: <BookOpen />, title: "Core CS", items: "DSA, OOP, OS, DBMS" },
                        ].map((skill, i) => (
                            <div key={i} className="group hover:bg-[#3E342D] p-4 transition-colors cursor-default">
                                <div className="text-[#C8B8A0] mb-2 group-hover:scale-110 transition-transform origin-left">{skill.icon}</div>
                                <h4 className="font-bold mb-1">{skill.title}</h4>
                                <p className="text-sm text-[#C8B8A0] opacity-70">{skill.items}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Bento Grid */}
            <section id="projects" style={{ scrollMarginTop: 'calc(var(--header-height) + 0.5rem)' }} className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle>Featured Projects</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4 grid-flow-row-dense">

                        {/* 1. Interview Partner (2x2) - Main Feature */}
                        <BentoItem
                            title="Interview Partner"
                            desc="Voice-first AI mock interviewer agent built for Eightfold.ai, providing adaptive questions and feedback."
                            tags={['Voice AI', 'React', 'Python']}
                            size="lg" // 2x2
                            type="voice"
                            link="https://interviewpracticepartner.onrender.com"
                            githubLink="https://github.com/HarshitSuru/InterviewPracticePartner-Voice"
                        />

                        {/* 2. TripNest (2x1) - Wide */}
                        <BentoItem
                            title="TripNest"
                            desc="Full-stack travel booking platform."
                            tags={['MERN', 'Passport.js']}
                            size="md" // 2x1
                            type="commerce"
                            link="https://major-project-fx82.onrender.com"
                            githubLink="https://github.com/HarshitSuru/major-project"
                        />

                        {/* 3. Heart Disease (1x2) - Tall */}
                        <BentoItem
                            title="Heart Prediction"
                            desc="ML app for cardiac risk assessment."
                            tags={['Python', 'Streamlit', 'ML']}
                            size="tall" // 1x2
                            type="dashboard"
                            link="https://heartdiseasepre.streamlit.app"
                            githubLink="https://github.com/HarshitSuru/HeartDiseasePrediction"
                        />

                        {/* 4. Symptom Predictor (1x1) - Small */}
                        <BentoItem
                            title="Symptom AI"
                            desc="Disease prediction via symptoms."
                            tags={['Flask', 'Scikit-learn']}
                            size="sm" // 1x1
                            type="code"
                            link="https://medicure-app-dnw8.onrender.com"
                            githubLink="https://github.com/HarshitSuru/Disease-Prediction-Using-Symptoms"
                        />

                        {/* 5. Meeting Summarizer (2x1) - Wide */}
                        <BentoItem
                            title="Meeting Summarizer"
                            desc="Converts transcripts to AI summaries."
                            tags={['NLP', 'AI', 'Full-stack']}
                            size="md" // 2x1
                            type="chat"
                            link="https://meeting-summarizer-3.onrender.com"
                            githubLink="https://github.com/HarshitSuru/meeting-summarizer"
                        />

                        {/* 6. Policy Portal (1x1) - Small */}
                        <BentoItem
                            title="Policy Portal"
                            desc="Gov scheme directory."
                            tags={['HTML', 'CSS', 'JS']}
                            size="sm" // 1x1
                            type="dashboard"
                            link="https://github.com/HarshitSuru/Policy-Portal"
                            githubLink="https://github.com/HarshitSuru/Policy-Portal"
                        />

                    </div>
                </div>
            </section>

            {/* Education & Achievements Section (Unified Design) */}
            <section id="education" style={{ scrollMarginTop: 'calc(var(--header-height) + 0.5rem)' }} className="py-24 px-6 bg-[#E8DFC8]/30 scroll-mt-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                    {/* Education Column */}
                    <div>
                        <SectionTitle>Education</SectionTitle>
                        <div className="flex flex-col gap-8">
                            <TimelineItem
                                icon={<BookOpen size={16} />}
                                title="B.Tech — Computer Science"
                                subtitle="MLR Institute of Technology"
                                date="2022 - 2026"
                                description="CGPA: 9.20"
                            />
                            <TimelineItem
                                icon={<BookOpen size={16} />}
                                title="Intermediate (MPC)"
                                subtitle="Narayana Junior College"
                                date="2020 - 2022"
                                description="Percentage: 98.7%"
                            />
                            <TimelineItem
                                icon={<BookOpen size={16} />}
                                title="Class X"
                                subtitle="Bhashyam High School"
                                date="2019 - 2020"
                                description="SSC"
                            />
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div>
                        <SectionTitle>Achievements</SectionTitle>
                        <div className="flex flex-col gap-8">
                            <TimelineItem
                                icon={<Award size={16} />}
                                title="First Place"
                                subtitle="Innovation Challenge"
                                date="2024"
                                description="Centre for Innovation and Entrepreneurship"
                            />
                            <TimelineItem
                                icon={<Award size={16} />}
                                title="Runner-up"
                                subtitle="ZENITH 2024"
                                date="2024"
                                description="Heart Disease Prediction System"
                            />
                            <TimelineItem
                                icon={<Award size={16} />}
                                title="Academic Excellence"
                                subtitle="Consistent Performance"
                                date="Ongoing"
                                description="Academic performance & project recognitions"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 bg-[#2F2722] text-[#F8F4EC] scroll-mt-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">GET IN TOUCH</h2>
                    <p className="text-[#C8B8A0] text-xl mb-12 max-w-2xl mx-auto">
                        Feel free to reach out for collaborations or opportunities.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        <div className="flex items-center gap-3 justify-center text-[#E8DFC8]">
                            <Mail size={20} />
                            <span>suruharshit2005@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center text-[#E8DFC8]">
                            <Phone size={20} />
                            <span>+91 90592 27008</span>
                        </div>
                    </div>

                    <a href="mailto:suruharshit2005@gmail.com" className="inline-block bg-[#F8F4EC] text-[#2F2722] px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#C8B8A0] transition-colors border-none text-lg">
                        Say Hello
                    </a>

                    <div className="flex justify-center gap-12 mt-20 opacity-50">
                        <a href="https://linkedin.com/in/suruharshit" target="_blank" rel="noreferrer" className="hover:text-[#C8B8A0] hover:opacity-100 transition-all uppercase tracking-widest text-sm">LinkedIn</a>
                        <a href="https://github.com/HarshitSuru" target="_blank" rel="noreferrer" className="hover:text-[#C8B8A0] hover:opacity-100 transition-all uppercase tracking-widest text-sm">GitHub</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2F2722] text-[#5B5042] py-8 text-center text-xs uppercase tracking-widest border-t border-[#5B5042]/30">
                <p>&copy; {new Date().getFullYear()} Harshit Suru. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

