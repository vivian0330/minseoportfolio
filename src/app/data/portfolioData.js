export const portfolioData = {
  profile: {
    name: "강민서",
    imageUrl: "/profile.png", // 없을 시 방패 아이콘 사용
    tagline: "보안 전문가를 향한 여정",
    subtitle: "실무 중심의 보안 역량과 문제 해결 능력을 갖춘 인재",
    introduction: [
      "융합보안공학 동아리 활동을 통해 보안의 기초부터 최신 기술까지 배우며 성장하고 있습니다.",
      "시스템 보안 분야에 큰 매력을 느꼈고, 배운 지식을 적용하여 CTF 문제를 출제하는 경험을 통해 이론을 실체화하는 즐거움을 알게 되었습니다."
    ],
    education: {
      university: "성신여자대학교",
      major: "융합보안공학과",
      status: "재학 중", // 또는 졸업년도
      //gpa: "4.2/4.5" // 선택사항
    },
    experience: [
      {
        //title: "학부연구생",
        //organization: "성신여대 SSS 랩",
        //period: "2024.07 - 2025.02",
        //track: "AI 모델 기반 보안 취약점 탐지",
      }
    ],
    contact: {
      email: "vivianvivi0330@gmail.com",
      github: "https://github.com/vivian0330",
      linkedin: "https://www.linkedin.com/in/%EB%AF%BC%EC%84%9C-%EA%B0%95-234a27246/",
      blog: "https://vivian0330.tistory.com/m"
    }
  },

  clubs: [
    {
      id: "club-mcpsec",
      name: "융합보안공학과 학술동아리 융보공",
      university: "성신여자대학교",
      role: "8기 부원",
      period: "2024.03 - 현재",
      description: "매주 보안 세미나를 통해 웹해킹, 시스템해킹, 암호학, 네트워크 등 다양한 보안 분야를 학습하고 있습니다.",
      activities: [
        "주간 보안 기술 세미나 참여",
        "CTF 문제 출제 및 해결",
        "보안 취약점 분석 실습",
        "동아리 내 지식 공유 및 토론"
      ],
      achievements: [
        //"2025 제 2회 융보공 MCP CTF 장려상 수상",
        "웹 해킹 분야 CTF 문제 출제"
      ]
    }
  ],

  projects: [
    {
      id: "project-ctf-2025",
      title: "융합보안공학 8기 CTF 문제 출제",
      period: "2025.05 - 2025.06",
      status: "완료",
      thumbnail: "/projecttestimage.png",
      images: [
        "/gallerydefault.png",
        "/gallerydefault.png",
        "/gallerydefault.png"
      ],
      overview: "동아리 기술 세미나에서 학습한 지식을 바탕으로 직접 취약점을 설계하고, 다른 부원들이 출제한 다양한 분야의 문제를 해결하며 공격과 방어의 원리를 종합적으로 학습했습니다.",
      contribution: [
        "'Integer Overflow' 취약점을 응용한 시스템 해킹 문제 출제",
        "다른 팀원이 출제한 웹, 암호학 분야 문제 해결 및 Write-up 작성"
      ],
      techStack: ["C", "Python", "GDB", "CTFd"],
      links: {
        github: [
          { name: "CTF 문제 소스코드", url: "https://github.com/YYJ-SH/ctfd_final" },
          { name: "Write-up 모음", url: "https://just-switch-e27.notion.site/2025-CTF-MCP-225744acd59580a79903e5da1ff24793?source=copy_link" }
        ],
        docs: [
          { name: "문제 풀이 및 해설", url: "https://creamerburger.tistory.com/10" },
          { name: "CTF 참가 후기", url: "https://creamerburger.tistory.com/11" }
        ]
      }
    },
    {
      id: "project-web-security-study",
      title: "웹 보안 팀 스터디 프로젝트",
      period: "2024.09 - 2024.12",
      status: "완료",
      thumbnail: "/projecttestimage.png",
      images: [
        "/gallerydefault.png",
        "/gallerydefault.png",
        "/gallerydefault.png",
        "/gallerydefault.png"
      ],
      overview: "융보공 동아리 내 웹 보안 팀으로 참여하여 OWASP Top 10 취약점을 체계적으로 학습하고, 실제 웹 애플리케이션에서 취약점을 발견하고 익스플로잇하는 실무 경험을 쌓았습니다.",
      contribution: [
        "SQL Injection 취약점 분석 및 익스플로잇 실습 진행",
        "XSS(Cross-Site Scripting) 공격 벡터 연구 및 방어 기법 학습",
        "CSRF, IDOR 등 인증/인가 취약점 분석",
        "팀원들과 함께 취약점 실습 랜드 및 보고서 작성"
      ],
      techStack: ["Burp Suite", "OWASP ZAP", "Python", "JavaScript", "PHP", "MySQL"],
      links: {
        github: [
          { name: "웹 보안 스터디 자료", url: "https://github.com/sooa-lee/web-security-study" },
          { name: "취약점 실습 코드", url: "https://github.com/sooa-lee/vuln-lab-codes" }
        ],
        docs: [
          { name: "OWASP Top 10 스터디 노트", url: "https://creamerburger.tistory.com/72" },
          { name: "SQL Injection 분석 리포트", url: "https://creamerburger.tistory.com/72" },
          { name: "XSS 공격 벡터 연구", url: "https://creamerburger.tistory.com/72" }
        ]
      }
    }
  ],
  
  learningActivities: [
    {
      id: "learn-fuzzing",
      title: "시스템 해킹 및 퍼징 (AFL)",
      organization: "융합보안공학과 학술동아리 융보공",
      period: "2024.11",
      instructor: "융보공 기획부",
      description: "AFL을 활용한 퍼징 기법을 배우고, Damn Vulnerable C Program의 다양한 메모리 취약점을 분석 및 탐지하는 실습을 진행했습니다.",
      materials: [
        { name: "세미나 자료", url: "/NINE.pdf" },
        { name: "실습 후기", url: "https://creamerburger.tistory.com/fuzzing-experience" }
      ]
    },
    {
      id: "learn-llm",
      title: "LLM 보안과 프롬프트 인젝션",
      organization: "융합보안공학과 학술동아리 융보공",
      period: "2024.10",
      instructor: "융보공 기획부",
      description: "PortSwigger 실습을 통해 최신 AI 기술의 보안 위협인 Prompt Injection 공격을 직접 수행하고 방어의 필요성을 체감했습니다.",
      materials: [
        { name: "세미나 자료", url: "/NINE.pdf" },
        { name: "PortSwigger 실습 기록", url: "https://creamerburger.tistory.com/82" }
      ]
    },
    {
      id: "learn-network",
      title: "네트워크 패킷 분석 (Wireshark)",
      organization: "융합보안공학과 학술동아리 융보공",
      period: "2024.11",
      instructor: "융보공 기획부",
      description: "Wireshark를 활용해 TCP 3-Way Handshake, ARP 등 주요 프로토콜의 동작 원리를 패킷 레벨에서 분석했습니다.",
      materials: [
        { name: "세미나 자료", url: "/wireshark.pdf" },
        { name: "패킷 분석 리포트", url: "https://creamerburger.tistory.com/72" }
      ]
    }
  ],
  /*
  awards: [
    {
      id: "award-mcp-ctf-2025",
      title: "2025 제 2회 융보공 MCP CTF 장려상",
      organizer: "융합보안공학과",
      date: "2025. 06.",
      description: "시스템 해킹 분야 문제 출제 및 종합 점수를 바탕으로 장려상을 수상했습니다.",
      proofImage: "/defaultimage.png"
    },
    {
      id: "award-creative-2024",
      title: "2024 창의융합경진대회 우수상",
      organizer: "성신여자대학교",
      date: "2024. 12.",
      description: "LLM 보안 교육 서비스 아이디어로 우수상을 수상했습니다.",
      proofImage: "/defaultimage.png"
    }
  ],*/

  certificates: [
    {
      //id: "cert-bob-2025",
      //name: "Best of the Best (BoB) 13기 수료증 (취약점 분석 트랙)",
      //organizer: "한국정보기술연구원(KITRI)",
      //date: "2025. 03.",
      //certificateImage: "/defaultimage.png"
    },
    {
      id: "cert-mcpsec-8th",
      name: "융합보안공학과 학술동아리 융보공 8기 수료증",
      organizer: "성신여자대학교 융합보안공학과",
      date: "2025. 01.",
      certificateImage: "/defaultimage.png"
    },
    {
      id: "cert-ctf-pizza",
      name: "제 2회 융보공 CTF&PIZZA 수료증",
      organizer: "융합보안공학과 학술동아리 융보공",
      date: "2025. 06.",
      certificateImage: "/defaultimage.png"
    }
  ],

  externalActivities: [
    {
      id: "activity-secon-2025",
      name: "제23회 세계보안엑스포 (SECON & eGISEC)",
      role: "참가자 (Attendee)",
      date: "2025. 03. 21.",
      description: "국내외 주요 보안 기업들의 부스를 방문하여 최신 AI 보안, 클라우드 보안 기술 동향을 파악하고, 다양한 보안 솔루션의 동작 원리를 이해하는 기회를 가졌습니다.",
      activityImage: "/defaultimage.png"
    },
    /*
    {
      id: "activity-codegate-2024",
      name: "CODEGATE 2024 청소년 부문",
      role: "참가자",
      date: "2024. 08.",
      description: "국내 최대 규모의 해킹 컨테스트에 참가하여 실제 보안 전문가들과 경쟁하며 실력을 검증받는 기회를 가졌습니다.",
      activityImage: "/defaultimage.png"
    },
    {
      id: "activity-kisa-seminar-2024",
      name: "KISA 사이버보안 세미나 2024",
      role: "참가자",
      date: "2024. 11.",
      description: "한국인터넷진흥원(KISA)에서 주최한 사이버보안 세미나에 참가하여 국가 차원의 보안 정책과 최신 위협 동향에 대해 학습했습니다.",
      activityImage: "/defaultimage.png"
    }*/
  ],/*
  skills: {
    "언어": [
      { name: "Python", description: "CTF Exploit 코드, 자동화 스크립트 작성" },
      { name: "C", description: "시스템 취약점 분석 및 구현" },
      { name: "JavaScript", description: "Next.js를 이용한 웹 개발" }
    ],
    "보안 도구": [
      { name: "AFL", description: "퍼징을 통한 취약점 자동 탐색" },
      { name: "Wireshark", description: "패킷 캡처 및 프로토콜 분석" },
      { name: "Burp Suite", description: "웹 취약점 분석" }
    ],
    "기타": [
      { name: "Docker", description: "컨테이너 기반 환경 이해" },
      { name: "Git & GitHub", description: "버전 관리 및 협업" },
      { name: "Linux", description: "CLI 환경 서버 관리" }
    ]
  },

  blogPosts: [
    {
      id: "post-1",
      title: "CTF 'Integer Overflow' 문제 풀이 (Write-up)",
      thumbnail: "/blogtestimage.png",
      description: "제가 직접 출제한 문제의 기획 의도와 상세한 풀이 과정입니다.",
      url: "https://creamerburger.tistory.com/10",
      date: "2025. 06. 15.",
      tags: ["CTF", "System Hacking", "Write-up"]
    },
    {
      id: "post-2",
      title: "SQL Injection 취약점 심층 분석: Union-based 공격부터 Blind 기법까지",
      thumbnail: "/blogtestimage.png",
      description: "OWASP Top 10에 포함된 SQL Injection 취약점의 다양한 공격 기법과 실제 익스플로잇 사례를 분석합니다.",
      url: "https://creamerburger.tistory.com/82",
      date: "2024. 11. 28.",
      tags: ["Web Security", "SQL Injection", "OWASP"]
    },
    {
      id: "post-3",
      title: "AFL 퍼징으로 취약점 찾기: 실전 경험 공유",
      thumbnail: "/blogtestimage.png",
      description: "AFL을 사용한 퍼징 실습 과정과 발견한 취약점들을 정리했습니다.",
      url: "https://creamerburger.tistory.com/fuzzing-experience",
      date: "2024. 11. 20.",
      tags: ["Fuzzing", "AFL", "Vulnerability"]
    },
    {
      id: "post-4",
      title: "XSS 공격 벡터 연구: Stored XSS에서 DOM XSS까지",
      thumbnail: "/blogtestimage.png",
      description: "웹 보안 스터디에서 진행한 XSS 취약점 연구와 다양한 공격 시나리오를 소개합니다.",
      url: "https://creamerburger.tistory.com/xss-research",
      date: "2024. 10. 15.",
      tags: ["Web Security", "XSS", "DOM Manipulation"]
    },
    {
      id: "post-5",
      title: "LLM 보안 위협과 프롬프트 인젝션 공격 분석",
      thumbnail: "/blogtestimage.png",
      description: "PortSwigger 실습을 통해 배운 LLM 보안 위협과 대응 방안을 다룹니다.",
      url: "https://creamerburger.tistory.com/82",
      date: "2024. 10. 28.",
      tags: ["LLM", "AI Security", "Prompt Injection"]
    },
    {
      id: "post-6",
      title: "Wireshark로 네트워크 패킷 분석 마스터하기",
      thumbnail: "/blogtestimage.png",
      description: "네트워크 프로토콜 분석과 Wireshark 사용법을 실습 예시와 함께 설명합니다.",
      url: "https://creamerburger.tistory.com/wireshark-analysis",
      date: "2024. 11. 05.",
      tags: ["Network", "Wireshark", "Protocol Analysis"]
    }
  ]
  */
};