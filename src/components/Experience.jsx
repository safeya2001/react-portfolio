import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Experience() {
    return (
        <section className="text-light p-4">
            <Container>
                <h2 className="text-center mb-4">Experience</h2>
                <Card className="bg-dark text-light p-4 rounded">
                    <h3>Advanced Data Analytics Training Program</h3>
                    <p>Correlation One Oct 2024 - march 2025</p>
               <p>, 

+ Mastered advanced analytics techniques through 17-week intensive training program, applying SQL,
Python, and Excel to solve complex business cases Implemented Excel automation formulas reducing
data duplication by 30%, enhancing dataset accuracy for strategic decision-making Executed statistical
analysis identifying key sales drivers, resulting in targeted marketing strategies and 15% revenue increase
Built regression models analyzing advertising ROI, optimizing budget allocation to achieve 20% growth
in customer acquisition Engineered SQL queries and Excel functions to resolve null values, delivering
100% data completeness for customer database Developed Python automation workflows using Pandas
and NumPy, cutting data preparation time by 40% Applied Z-score analysis to identify statistical outliers,
improving data reliability for forecasting models</p>
                </Card>
            </Container>
        </section>
    );
}

export default Experience;