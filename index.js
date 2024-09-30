% Based off of: https://github.com/sb2nov/resume---------------------

\documentclass[letterpaper,11pt]{article}
% \input{particulars}
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage{fontawesome5}
\usepackage{multicol}
\setlength{\multicolsep}{-3.0pt}
\setlength{\columnsep}{-1pt}
\usepackage{url}
\input{glyphtounicode}



%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}


\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.6in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1.19in}
\addtolength{\topmargin}{-.7in}
\addtolength{\textheight}{1.4in}


\newcommand{\urlsymbol}{\faIcon{globe-pointer}} % Using FontAwesome 5 icon 'globe-pointer'

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large\bfseries
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\describe}[2]{
    \csname #1@#2\endcsname
}


\newcommand{\classesList}[4]{
    \item\small{
        {#1 #2 #3 #4 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & \textbf{\small #2} \\
      \small#3 & \small #4 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textbf{\small#1} & \textbf{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{1.001\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & \textbf{\small #2}\\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}
\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.0in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
\def\titlesection{
\begin{center}
    {\Huge \scshape Shriyansh Kumar} \\ \vspace{1pt}
    \small \raisebox{-0.1\height}\faPhone\ +91 9351864035 ~ \href{mailto:\email}{\raisebox{-0.2\height}\faEnvelope\  \underline{Shriyansh7870@gmail.com}} \\
    \href{https://www.linkedin.com/in/shri7870/}{\raisebox{-0.2\height}\faLinkedin\ \underline{linkedin.com/in/Shriyansh}}  ~
    \href{https://github.com/Shriyansh7870}{\raisebox{-0.2\height}\faGithub\ \underline{github.com/Shriyansh7870}}  ~
    \href{https://next-portofoli-git-main-shriyansh-kumars-projects.vercel.app/}{\raisebox{-0.2\height}\faGlobe\ \underline{Portfolio}}  % Add your portfolio link here
    \vspace{-8pt}
\end{center}
}



\begin{document}
\titlesection
% \profileSummary

\describe{College}{Start}

%-----------technical skills-----------
\section{Technical skills}
% \resumeSubHeadingListStart
%     \resumeSubheading
%         \resumeItemListStart
        
        % \textbf{Technologies:} Java, Spring Boot, Maven, Jenkins, Grafana, Bitbucket, Jira, AWS, TAS Panel, SonarQube, MySQL Workbench, Redis, Kafka.}
    \begin{itemize}
      \item \textbf{Languages \& Frameworks:} JavaScript, ReactJs, NextJS, NodeJs ,Express, Mongodb
      \item \textbf{Tools \& Technologies:} Web Development,Github, Webpack, Vite, Parcel, GitHub Actions, Netlify, Vercel,REST, GraphQL, Firebase
    \end{itemize}
% \resumeSubHeadingListEnd


  


%-----------Work Experience-----------
\section{Work Experience}

    \resumeSubHeadingListStart
    \resumeSubheading
      {Umenit Solution LLP }{Gurgram, India}
      {\textbf{Full Stack  Developer}}{\textbf{Nov 2023 - Present}}
      
      \resumeItemListStart
        \item {\textbf{Umenit Bots:}} 
            {This project integrates AI seamlessly into the website, enhancing functionality and user interaction. It leverages advanced algorithms to deliver intelligent, responsive, and automated experiences.The website's reach increased by 40\% resulting in significant growth in user engagement and visibility}
        \item{\textbf{Parking Arms:}}
          {After developing the website for the parking arms project using Next.js, TypeScript, and Tailwind CSS, with state management via Redux and REST API integration, the website's user base increased by 60\%, improving overall user engagement and performance.}
        \item{\textbf{Link Health Care:}}
          {Work on a health management system using
 React.js and Tailwind CSS. Implemented state management with
 Redux and handled API calls using REST API,  graphQl.}
 \resumeItemListEnd
 \resumeSubheading
      {AICT Pvt Ltd }{Durgapur, India}
      {\textbf{ Full Stack  Developer Intern}}{\textbf{sep 2022 - April 2023}}
      
      \resumeItemListStart   
        \item{\textbf{E-commerce:}}
          {Developed a full-featured e-commerce website using React for the front end and Node.js with Express for the backend, resulting in a 30\% increase in user engagement. Utilized MongoDB for data storage, enabling efficient product management and secure user authentication. Implemented responsive design and secure payment integration, significantly enhancing user experience and scalability.}
      \resumeItemListEnd
  \resumeSubHeadingListEnd
  
\vspace{-8pt}



%-----------Notable Github Projects-----------
\section{Relevant Projects}

\cvitem{\textbf{UdemyClone}\hfill\href{https://sparkling-dasik-8e2846.netlify.app/}{\raisebox{-0.2\height} \textit\underline{{https://euphonious-blini-b979a0.netlify.app/}}} \textit{\faLink}}
{\begin{itemize}
\item  Developed a comprehensive Udemy clone with features including robust course management, user authentication, and seamless payment processing, resulting in a 25\% increase in user retention. Implemented interactive quizzes, progress tracking, and a responsive design to enhance user experience and engagement. Showcased proficiency in delivering a scalable e-learning platform that meets diverse user needs.
\end{itemize}}

\cvitem{\textbf{E-Commerce}\hfill\href{https://jolly-marzipan-656fc0.netlify.app/}{\raisebox{-0.2\height} \textit{\underline{{{https://jolly-marzipan-656fc0.netlify.app/}}}}} \textit{\faLink}}
{\begin{itemize}
\item Crafted a feature-rich e-commerce platform using React for the frontend,
 Node.js for the backend, and MongoDB for database management.
 Leveraged the MERN stack to ensure a responsive, scalable, and user
 friendly online shopping experience, demonstrating expertise in full stack
 development
\end{itemize}}

\cvitem{\textbf{Resume filter Bot}{\raisebox{-0.2\height} \textit{\underline{}}}\textit
{\begin{itemize}
\item  Developed a Resume Filter Bot using Next.js and Tailwind CSS. The bot
 analyzes resumes against provided job descriptions and calculates a
 match percentage, streamlining the hiring process by identifying the best
fit candidates efficiently
\end{itemize}}


% \cvitem\href{https://github.com/varunswing/php-social-network}{\textbf{Social Network (PHP)} \textit{\faLink}}{\begin{itemize}
% \item Created a basic social networking site using PHP, MySQL, Bootstrap, and HTML, managed with PhpMyAdmin for database administration.
% \end{itemize}}


%-----------EDUCATION-----------------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Bengal College of Engineering and Technology}{WestBengal, India}
      {Bachelor of Technology in Information technology   CGPA -- 8.89}{Jul 2019 -- Jul 2023}
    \resumeSubheading
      { Ucch Vidyalaya}{Patna, India}
      {Intermediate,  BBOSE -- 63.4\%}{Apr 2017 -- Mar 2019}
    \resumeSubheading
    {Veena Vidya Niketan}{Patna, India}
    {Matriculation,  CBSE -- 9.8 CGPA}{Apr 2015 -- Mar 2016}
  \resumeSubHeadingListEnd

  
% %-----------Internships-----------
% \section{Internships}
% \resumeSubHeadingListStart

%     \resumeSubheading
%       {Paytm}{Noida, India}
%       {\textbf{Software Engineer Intern}}{\textbf{Jan 2022 - Jun 2022}}
%       \resumeItemListStart
%         \resumeItem{Tensorflow}
%           {TensorFlow is an open source software library for numerical computation using data flow graphs; primarily used for training deep learning models. Worked on APIs and performance for training models on Tensor Processing Units (TPU).}
%         \resumeItem{Apache Beam}
%           {Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines, as well as a set of language-specific SDKs for constructing pipelines and runners.}
%       \resumeItemListEnd
% \resumeSubHeadingListEnd

% \newcommand{\renderHck}[1]{
%       \resumeProjectHeading
%       {\textbf{\csname #1@Title\endcsname} $|$ \csname #1@Position\endcsname}
%       {\csname #1@Date\endcsname}
%       \csname #1@Highlights\endcsname
% }



\end{document}