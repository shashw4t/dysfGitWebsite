import React from 'react';
        import Project from './Project';

        const Portfolio: React.FC = () => {
        return (
<div>
    <div>
        <Project
                title="Don’t Wreck My House (DWMH)"
                body="A comprehensive project management system designed to assist hosts in managing guest reservations efficiently. Built using Java and JUnit."
        />
    </div>

    <div>
        <Project
                title="Predict Future Sales (Kaggle)"
                body="Developed predictive models using machine learning techniques to forecast future sales with high accuracy. Achieved a Mean Absolute Error (MAE) of 0.19."
        />
    </div>

    <div>
        <Project
                title="Another Project Title"
                body="A brief description of another project you’ve worked on, detailing the technology stack used and the key achievements."
        />
    </div>
</div>
        );
        }

        export default Portfolio;
