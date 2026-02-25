export const profile = {
  name: "Sondre Lyngstad",
  title: "Cybernetics & Robotics · Electrical Engineer",
  location: "Stavanger, Norway",


intro: 
"I am an MSc student in Cybernetics and Robotics at the University of Stavanger, with a background in Electrical Engineering. My academic work combines control systems, automation, and applied data analysis, with hands-on experience from projects involving system modeling, simulation, and real-world implementation.",

introProjects:
"Through my studies, I have worked on interdisciplinary projects ranging from liquid rocket engine propellant systems to predictive modeling of clinical data using machine learning. These experiences have strengthened my ability to bridge theory and practice, and to work across software, electronics, and control domains.",

introMotivation:
"I am motivated by solving complex, real-world problems and enjoy working in structured, technical environments where reliability, clarity, and engineering quality matter. I am eager to further develop my skills in a professional setting and contribute to impactful engineering projects.",

  links: {
    email: "mailto:srlyng@gmail.com",
    linkedin: "https://www.linkedin.com/in/sondre-lyngstad-b05263293/",
    phone: "tel:+4794845006",
    
    documents: {
    recommendations: import.meta.env.BASE_URL + "docs/Attester_merged.pdf",
    transcript: import.meta.env.BASE_URL + "docs/Karakterutskrift_Digitalt_Signert.pdf",
    cv: import.meta.env.BASE_URL + "docs/cv_engelsk.pdf",
  },


  },
}
export const projects = [
  {
    title: "MSc Thesis: Prediction of Falls and Freezing of Gait in Parkinson’s Disease Using Machine Learning and Statistical Methods",
    description: "This project analyzes longitudinal clinical data from the Norwegian ParkWest Parkinson’s disease cohort. The objective is to predict the risk of falls and freezing of gait within defined time horizons. Machine learning and statistical methods are used to identify key predictors and develop predictive models. The thesis compares multiple approaches, including survival analysis, logistic regression, and LSTM models, with the goal of providing clinicians with improved decision-support tools. The project is currently ongoing as part of an MSc thesis.",
    tech: [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Survival Analysis",
  "LSTM",
  "PyTorch" ,       // if you implemented LSTM yourself
  "TensorFlow" ,    // alternative DL framework
  "Statsmodels",   // for statistical modeling
  "Matplotlib"    // for analysis/visualization

]
,
    github: "",
    demo: "",
  },

  {
    title: "BSc Thesis: Development of a propellant feeding system and regulation of fuel for a liquid rocket engine.",
    description: "Developed a propellant feed system for the UIS Aerospace liquid rocket engine. This included design, dimensioning, simulation, and mechanical integration of the system, as well as the development and implementation of control algorithms to measure and regulate fuel flow. The project combined hardware and software components to ensure stable and efficient engine operation and was completed as part of a BSc thesis. The system was made in a container and a video of the system in operation can be seen by using the link below.",
    tech: ["Control Systems", "Embedded Systems", "MATLAB", "Simulink", "AutoCAD", "PLC Programming", "Sysmac Studios"],
    github: "",
    demo: "https://www.youtube.com/embed/qcU7mmd5XMk",
    images : [
    import.meta.env.BASE_URL + "images/BCs_bilder/feedsys_full.JPG",
    import.meta.env.BASE_URL + "images/BCs_bilder/Fyring.PNG",
    import.meta.env.BASE_URL + "images/BCs_bilder/feedsys_bak.JPG",
    import.meta.env.BASE_URL + "images/BCs_bilder/kontainer_plassert_uis.JPG",
    import.meta.env.BASE_URL + "images/BCs_bilder/sikringsskap_testsite.JPG",
    
  ],
  },

    {
    title: "Forecasting Daily Household Energy Consumption Patterns",
    description: "This project focuses on forecasting household electricity consumption using time-series data collected from smart meters. The objective is to model and predict daily energy usage patterns based on historical consumption and temporal features. Statistical forecasting methods and machine learning models, including ARIMA-based approaches and LSTM networks, are developed and compared to evaluate predictive performance. The results demonstrate how data-driven forecasting can support improved energy management and demand planning.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "ARIMA", "LSTM"],
    github: "",
    report: import.meta.env.BASE_URL + "reports/Forecasting_Daily_Household_Energy_Consumotion.pdf",
   images : [
    import.meta.env.BASE_URL + "images/DAT540/30day_MA.png",
    import.meta.env.BASE_URL + "images/DAT540/ARIMA_pred.png",
    import.meta.env.BASE_URL + "images/DAT540/model_comp.png",
    import.meta.env.BASE_URL + "images/DAT540/SARIMA_pred.png",
    import.meta.env.BASE_URL + "images/DAT540/XGBoost_pred.png",
    
  ],
},

    {
    title: "Bag-of-Words Document Classification with Neural Networks",
    description:
        "This project focuses on document classification of scientific abstracts using Bag-of-Words and word embedding representations combined with neural network models. Abstracts from the ArXiv100 dataset are classified into research categories using Feedforward and Recurrent Neural Networks, including LSTM and GRU architectures. Different text representations are compared using standard classification metrics to evaluate model performance.",
    tech: [
        "Bag-of-Words",
        "TF-IDF",
        "Word2Vec",
        "GloVe",
        "FastText",
        "Feedforward Neural Networks",
        "LSTM",
        "GRU",
        "Scikit-learn",
        "PyTorch"
    ],
    github: "",
    report: import.meta.env.BASE_URL + "reports/DAT550_Bag_of_words.pdf",
       images : [
    import.meta.env.BASE_URL + "images/DAT550/confusion_matrix_rnn.png",
    import.meta.env.BASE_URL + "images/DAT550/FFNN_illustrasjon.png",
    import.meta.env.BASE_URL + "images/DAT550/RNN-illustration.jpg",
      ],
    },

    {
    title: "Applied Mathematics and Control in LEGO Robotics",
    description:
        "This project is based on a comprehensive laboratory report in applied mathematics and physics for robotics, using LEGO Mindstorms EV3. The work covers numerical integration and differentiation, FIR and IIR filtering, signal processing with sensor noise, and practical control applications. Multiple experiments were implemented in MATLAB and Python, including manual and autonomous robot driving, PID-based cruise control, parking assistance, and automated sorting. Sensor data from light, ultrasonic, gyro, and motor encoders were analyzed to validate mathematical models against real-world robot behavior.",
    tech: [
        "MATLAB",
        "Python",
        "Numerical Integration",
        "Numerical Differentiation",
        "FIR / IIR Filtering",
        "Signal Processing",
        "PID Control",
        "Robotics"
    ],
    github: "",
    report: import.meta.env.BASE_URL + "reports/Rapport_Ele130_.pdf",
    images: [
        import.meta.env.BASE_URL + "images/legorobot/legobot.png",
        import.meta.env.BASE_URL + "images/legorobot/kjorebane.png",
        import.meta.env.BASE_URL + "images/legorobot/samleband.png",
        import.meta.env.BASE_URL + "images/legorobot/preg.png",  
        import.meta.env.BASE_URL + "images/legorobot/pireg.png", 
        import.meta.env.BASE_URL + "images/legorobot/pidreg.png", 
    ],
    },

    {
        title: "Vision-Guided Pick-and-Place with ABB Industrial Robot",
        description:
            "This project integrates computer vision and industrial robot control using an ABB robot. A Python-based vision system detects QR-coded pucks with OpenCV and transforms image coordinates into the robot’s coordinate system, which are transmitted to the controller via ABB Robot Web Services (RWS). RAPID programs use this data to perform automated pick-and-place operations, demonstrating real-time Python–RAPID communication, coordinate transformation, and practical challenges in calibration and timing.",
        tech: [
            "Python",
            "OpenCV",
            "Computer Vision",
            "RAPID Programming",
            "Coordinate Transformation",
        ],
        github: "",
        report: import.meta.env.BASE_URL + "reports/RS5_ELE610_ferdig.pdf",
        images: [
            import.meta.env.BASE_URL + "images/ELE610/norbert.png",
            import.meta.env.BASE_URL + "images/ELE610/puck.png",
        ],
        }


]

export const caseStudies = [
{
  title: "MSc Thesis: Prediction of Falls and Freezing of Gait in Parkinson’s Disease",
  problem:
    "Falls and freezing of gait are major contributors to reduced quality of life in Parkinson’s disease, yet they are difficult to predict reliably using standard clinical assessments. The challenge was to identify predictive patterns in longitudinal clinical data and estimate risk within defined future time horizons.",
  solution:
    "Longitudinal data from the Norwegian ParkWest cohort were analyzed using a combination of statistical and machine learning approaches. Survival analysis, logistic regression, and recurrent neural networks (LSTM) were implemented and compared. Feature engineering and model evaluation focused on interpretability, predictive performance, and clinical relevance.",
  result:
  "The project has established a complete data processing and modeling pipeline and produced early insights into factors associated with falls and freezing of gait. Early results indicate that longitudinal, data-driven approaches have potential to support future risk prediction, while ongoing work focuses on model refinement, validation, and comparison across methods.",

}
  
  ,

  {
  title: "BSc Thesis: Propellant Feed System for a Liquid Rocket Engine",
  problem:
  "Stable and controllable propellant flow is essential for safe and efficient operation of liquid rocket engines, particularly under high-pressure and transient operating conditions. The challenge was to design and implement a propellant feed system capable of regulating flow reliably while accounting for dynamic interactions between tanks, valves, and injectors. In addition, the system needed to be modeled and simulated to enable comparison between theoretical behavior and experimental test results.",
  solution:
    "A complete propellant feed system was designed, dimensioned, and simulated before mechanical integration. Control algorithms were developed to measure and regulate fuel flow using sensor feedback. Hardware and software components were integrated into a container-based test setup, and the system was validated through experimental testing.",
result:
  "Cold Fire and Hot Fire testing demonstrated that the propellant feed system was functional and capable of supplying propellant to the engine under realistic operating conditions. Cold Fire results showed reasonable agreement with Simscape simulations for tank pressure and mass behavior, while Hot Fire testing revealed limitations related to pressure regulation, valve performance, and sensor noise. The experiments provided valuable insight into system dynamics, component limitations, and areas requiring refinement for improved flow control and performance."
},

{
  title: "Forecasting Daily Household Energy Consumption Patterns",
  problem:
    "Accurate forecasting of household energy consumption is essential for efficient energy management and planning, but consumption patterns are highly variable and influenced by temporal factors.",
  solution:
    "Time-series models were developed using historical smart meter data. Statistical forecasting methods and machine learning approaches, including ARIMA and LSTM models, were implemented and compared. Feature engineering focused on capturing daily and seasonal consumption patterns.",
  result:
    "The models demonstrated the ability to capture key temporal trends in household energy usage, with machine learning approaches showing improved performance for complex consumption patterns. The project highlighted trade-offs between model complexity, interpretability, and predictive accuracy.",

}
]
export const skills = {
  cybernetics: [
    "Control Systems",
    "PID Control",
    "Feedforward Control",
    "System Modeling",
    "State-Space Modeling",
    "Stability & Tuning"
  ],

  electricalAutomation: [
    "Industrial Automation",
    "PLC Programming",
    "Sensors & Instrumentation",
    "Actuators & Valves",
    "Signal Conditioning",
    "System Integration"
  ],

  simulationTools: [
    "Simulink",
    "Simscape",
    "MATLAB"
  ],

  programming: [
    "Python",
    "MATLAB",
    "VS Code",
    "Git (basic)",
    "RAPID (ABB)",
    "Sysmac Studio (Omron)"
  ],

  dataML: [
    "Applied Machine Learning (scikit-learn)",
    "Time-Series Analysis & Forecasting",
    "Sequence Modeling (LSTM)",
    "Survival Analysis"
  ],

  engineeringTools: [
    "Excel",
    "RobotStudio"
  ]
}