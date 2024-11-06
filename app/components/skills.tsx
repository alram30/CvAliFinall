import React from 'react';
import './skills.css';

const skillsData = [
    { skill: 'Programing', level: 90 }, // Persentase dalam angka
    { skill: 'data analis', level: 70 },
    { skill: 'Music', level: 90 },
    { skill: 'Data Mining', level: 60 },
    { skill: 'Drawing', level: 60 },
];

const Skills: React.FC = () => {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <ul className="skills-list">
                {skillsData.map((item, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-name">{item.skill}</span>
                        <div className="bar-container">
                            <div className="bar" style={{ width: `${item.level}%` }} />
                        </div>
                        <span className="skill-level">{item.level}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
