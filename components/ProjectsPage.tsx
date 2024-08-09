import React from 'react';
        import Project from './Project';

        const ProjectsPage = () => {
        return (
<div>
    <Project
            title="Predict Future Sales Kaggle"
            body="Implemented machine learning models and optimization techniques such as Linear Regression, Random Forest, XGBoost, Hyperparameter Tuning and Grid Search to predict total sales and achieve a Mean Absolute Error (MAE) of 0.19."
    />

    <Project
            title="Bank Database Design Project Team"
            body="Designed a small database system, created and populated this database using ORACLE for a Database Management Systems Design Term Project."
    />

    <Project
            title="Wikipedia Spark Analysis"
            body="Used Spark via Python to process data, analyze trends and identified most popular language by obtaining results from 1.2 billion words from wikipedia pages."
    />

    <Project
            title="Generative Adversarial Network"
            body="Constructed a GAN for cartoon face generation using Torchvision to manipulate the images. Built a Wasserstein GAN to run the 10,000 images through a generator and discriminator composed of CNNs."
    />
</div>
        );
        }

        export default ProjectsPage;
