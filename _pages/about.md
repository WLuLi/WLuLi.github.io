---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am Qijie Wang, a first-year master's student at the School of Software, Tsinghua University, under the supervision of Associate Professor Bin Wang. I graduated with a bachelor's degree from the School of Software, Tsinghua University. As the first author, I have published one academic paper.
<a href='https://scholar.google.com/citations?user=voN01s0AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>


My research areas include: 3D Vision, AIGC.


<span class='anchor' id='-xl'></span>

# 🎓 Education
- *2024.08 - Present*, [<img class="svg" src="/images/Tsinghua_University_Logo.svg" width="23pt">](www.tsinghua.edu.cn) School of Software, Tsinghua University, Beijing, China, Master of Science  
- *2020.08 - 2024.07*, [<img class="svg" src="/images/Tsinghua_University_Logo.svg" width="20pt">](www.tsinghua.edu.cn) School of Software, Tsinghua University, Beijing, China, Bachelor’s Degree
 
<span class='anchor' id='-lwzl'></span>

# 📝 Publications
---
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACMMM 2024</div><img src='images/caps_adapter2024.svg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

-	**Qijie Wang**&dagger, Guandu Liu&dagger, Bin Wang. (2024). CapS-Adapter: Caption-based MultiModal Adapter in Zero-Shot Classification. https://arxiv.org/abs/2405.16591 
[[Paper]](https://arxiv.org/abs/2405.16591) [[Code]](https://github.com/WLuLi/CapS-Adapter)

-	Rui Qin&dagger, **Qijie Wang**&dagger, Ming Sun, Haowei Zhu, Chao Zhou, Bin Wang (2025). Accelerating Diffusion-based Super-Resolution with Dynamic Time-Spatial Sampling https://arxiv.org/abs/2505.12048 
[[Paper]](https://arxiv.org/abs/2505.12048)

</div>
</div>


<span class='anchor' id='-ryjx'></span>

# 🏆 Awards and Honors
- *Oct. 2023* Outstanding Social Practice Scholarship, School of Software, Tsinghua University
- *Oct. 2021* Outstanding Volunteer and Public Welfare Scholarship, School of Software, Tsinghua University
- *Oct. 2020* Freshman Second-Class Scholarship, Tsinghua University


<span class='anchor' id='-xshy'></span>

# 💻 Internship Experience

- **Zulong Entertainment**  
  *Internship Focus: Game Engine Technology Development*  
  *Jun. 2023 - Jul. 2023*  
  - Developed a basic software rasterizer from scratch, and implemented material effects such as edge highlighting, dissolution, and snow scenes based on the Unreal Engine material editor

- **4Paradigm**  
  *Internship Focus: Multimodal Large Model Algorithms Intern*  
  *Oct. 2023 - Jan. 2024*  
  - Replicated LLaVA1.5, conducted OCR data synthesis and filtering, fine-tuned multimodal large models, and tested them on multiple benchmarks

- **Kuaishou Technology**
  *Internship Focus: Generative AI Research*
  *Nov. 2024 - Present*
  - Co-first author of the paper *Accelerating Diffusion-based Super-Resolution with Dynamic Time-Spatial Sampling*
