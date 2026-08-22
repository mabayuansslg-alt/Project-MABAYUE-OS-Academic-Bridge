const academicData = {
  "Grade 11": {
    "ACAD - A": ["Life and skills", "Pag-aaral ng kasaysayan at lipunang pilipino", "General math", "General science", "Effective Communication", "Mabisang komunikasyon", "Biology"],
    "ACAD - B": ["Effective communication", "Mabisang komunikasyon", "Life skills", "General science", "General math", "Pag-aaral ng kasaysayan at lipunang pilipino", "Basic accounting"],
    "ACAD - C": ["Philippine Politics and Governance", "Pag-aaral ng kasaysayan at lipunang pilipino", "Life skills", "General Mathematics", "General Science", "Mabisang Komunikasyon", "Effective Communication"],
    "ACAD - D": ["Life and skills", "Pag-aaral ng kasaysayan at lipunang pilipino", "General Math", "General Science", "Effective communication", "Mabisang Komunikasyon", "Philippine Politics and Governance (PPG)"],
    "TECH-PRO - A": ["Bread and pastry production", "Effective communication", "Mabisang Komunikasyon", "Life skills", "General math", "General science", "Pag-aaral ng kasaysayan at lipunang pilipino"],
    "TECH-PRO - B": ["Programming Net. Technology / Technical Drafting", "Mabisang Komunikasyon", "Effective Communication", "General Science", "General Mathematics", "Pag-aaral ng kasaysayan at lipunang pilipino", "Life Skills"],
    "TECH-PRO - C": ["Effective communication", "Mabisang komunikasyon", "Life skills", "General science", "General math", "Pag-aaral ng kasaysayan at lipunang pilipino", "Bread and pastry production"]
  },
  "Grade 12": {
    "ACAD - A": ["Data analytics", "Biology", "Empowerment technologies", "Precalculus"],
    "ACAD - B": ["Entrepreneurship", "Citizen & Civic Engagement", "Intro to Organization & Management", "Empowerment Technologies"],
    "ACAD - C": ["Wika at komunikasyon", "Citizen and Civic Engagement", "Contemporary Literature", "Filipino Identity Through the Arts"],
    "ACAD - D": ["Citizenship and Civic Engagement", "Contemporary Literature", "Wika at Komunikasyon", "Filipino Identity Through the Arts"],
    "TECH-PRO - A": ["Kitchen Operations"],
    "TECH-PRO - B": ["Technical Drafting"],
    "TECH-PRO - C": ["Kitchen Operations"]
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const appContainer = document.getElementById("app-container");

  function renderHome() {
    appContainer.innerHTML = `
      <div style="margin-bottom: 32px; text-align: center;">
        <h1 style="font-size: 36px; margin-bottom: 8px;">Academic Bridge.</h1>
        <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">
          A centralized guide to help Mabayuan Senior High School learners organize and review their examination coverage.
        </p>
      </div>

      <h3 style="margin-bottom: 16px; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); font-weight: 700;">CHOOSE YOUR YEAR LEVEL</h3>

      <div class="choice-card" id="btn-g11">
        <div style="font-size: 13px; color: var(--primary); font-weight: 700; margin-bottom: 4px;">01</div>
        <h2 style="font-size: 24px;">Grade 11</h2>
        <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">Select section and view academic subjects.</p>
      </div>

      <div class="choice-card" id="btn-g12">
        <div style="font-size: 13px; color: var(--primary); font-weight: 700; margin-bottom: 4px;">02</div>
        <h2 style="font-size: 24px;">Grade 12</h2>
        <p style="color: var(--text-muted); font-size: 14px; margin-top: 4px;">Select section and view academic subjects.</p>
      </div>
    `;

    document.getElementById("btn-g11").onclick = () => renderSections("Grade 11");
    document.getElementById("btn-g12").onclick = () => renderSections("Grade 12");
  }

  function renderSections(gradeLevel) {
    const sectionsObj = academicData[gradeLevel];
    
    let sectionsHTML = Object.keys(sectionsObj).map((sectionName, index) => {
      const isAcad = sectionName.includes("ACAD");
      const trackLabel = isAcad ? "Academic Track" : "Technical-Professional Track";

      return `
        <div class="choice-card" id="sec-${index}">
          <span style="font-size: 11px; background: rgba(37, 99, 235, 0.1); color: var(--primary); padding: 4px 10px; border-radius: 20px; font-weight: 700; text-transform: uppercase;">
            ${trackLabel}
          </span>
          <h2 style="font-size: 20px; margin-top: 10px;">${gradeLevel} ${sectionName}</h2>
          <p style="color: var(--text-muted); font-size: 13px; margin-top: 4px;">
            ${sectionsObj[sectionName].length} subject(s) available
          </p>
        </div>
      `;
    }).join('');

    appContainer.innerHTML = `
      <button id="btn-back-home" style="margin-bottom: 24px;">← Back to Home</button>
      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); font-weight: 700;">YEAR LEVEL</h3>
        <h1 style="font-size: 32px; margin-top: 4px;">${gradeLevel} Sections</h1>
        <p style="color: var(--text-muted);">Select your section to view learning areas and subjects.</p>
      </div>
      <div>${sectionsHTML}</div>
    `;

    document.getElementById("btn-back-home").onclick = () => renderHome();

    Object.keys(sectionsObj).forEach((sectionName, index) => {
      document.getElementById(`sec-${index}`).onclick = () => renderSubjects(gradeLevel, sectionName);
    });
  }

  function renderSubjects(gradeLevel, sectionName) {
    const subjectsList = academicData[gradeLevel][sectionName];

    let subjectsHTML = subjectsList.map((subjectName, index) => `
      <div class="subject-card" id="subj-${index}">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-weight: 700; color: var(--primary);">SUBJECT ${index + 1}</span>
        </div>
        <h3 style="font-size: 20px; margin-top: 8px; margin-bottom: 4px;">${subjectName}</h3>
        <p style="font-size: 13px; color: var(--text-muted);">View examination coverage and learning materials.</p>
      </div>
    `).join('');

    appContainer.innerHTML = `
      <button id="btn-back-sec" style="margin-bottom: 24px;">← Back to Sections</button>
      <div style="margin-bottom: 24px;">
        <span style="font-size: 12px; background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-weight: 700;">
          ${gradeLevel} • ${sectionName}
        </span>
        <h1 style="font-size: 32px; margin-top: 10px; margin-bottom: 4px;">Learning Areas</h1>
        <p style="color: var(--text-muted);">Select a subject to view its examination coverage.</p>
      </div>
      <div>${subjectsHTML}</div>
    `;

    document.getElementById("btn-back-sec").onclick = () => renderSections(gradeLevel);

    subjectsList.forEach((subjectName, index) => {
      document.getElementById(`subj-${index}`).onclick = () => renderResources(gradeLevel, sectionName, subjectName);
    });
  }

  function renderResources(gradeLevel, sectionName, subjectName) {
    appContainer.innerHTML = `
      <button id="btn-back-subj" style="margin-bottom: 24px;">← Back to Subjects</button>
      <div style="margin-bottom: 24px;">
        <span style="font-size: 12px; background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-weight: 700;">
          ${gradeLevel} • ${sectionName}
        </span>
        <h1 style="font-size: 32px; margin-top: 10px; margin-bottom: 4px;">${subjectName}</h1>
        <p style="color: var(--text-muted);">Official Learning Materials & Examination Reviewers</p>
      </div>
      
      <div class="resource-card">
        <h4 style="font-size: 18px; margin-bottom: 8px; color: #0f172a;">Quarter 1 Examination Reviewer</h4>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 16px;">Coverage, modules, and key concepts for ${subjectName}.</p>
        <a href="#" target="_blank" class="btn" style="text-decoration: none; display: inline-block;">
          View / Download Material
        </a>
      </div>
    `;

    document.getElementById("btn-back-subj").onclick = () => renderSubjects(gradeLevel, sectionName);
  }

  // Load Home Screen automatically
  renderHome();
});