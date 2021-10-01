const HSRProjects = () => {
    return ( 
        <div className="paragraph-wrapper">
            <h2>Flight Safety Index</h2>
            <p>
                The FSI is a simulation based model of indoor disease
                transmission dynamics, particularly aircraft. The aim of this
                project is identify the risk of disease transmission aboard any
                given flight in the United States in order to strategically
                intervene in ways that maximize risk reduction, and minimize
                costs incurred by airlines.
            </p>
            <p>
                This work has been filed for U.S. patent: U.S. CIP App. No.:
                17/364,677. I am the lead engineer on the project and a listed
                inventor on the patent application.
            </p>
            <h2>School Safety Index</h2>
            <p>
                Built as an extension of the Flight Safety Index, the School
                Safety Index applies the same indoor modeling fundamentals and
                assumptions to a set of classrooms that define a whole school.
                The goal of this project is to identify the classrooms within
                schools that present the most risk, and systematically analyze
                interventions that maximize mitigations to disease spread,
                and minimize the costs to school systems and taxpayers.
            </p>
            <p>
                This work has won two separate Awards from the University of
                Maryland School of Public Health: Outstanding Capstone Project
                Award for the student intern that reported and assisted with the
                research behind this project, and the Innovation Award for the
                use of machine learning and simulation modeling to solve
                problems of health inequity.

            </p>
            <h2>Economic Risk Index</h2>
            <p>
                The economic ramifications of the COVID-19 pandemic have been
                well studied and documented over the last few years. This
                project considers the relationships between COVID-19 data and
                state level economic indicators on a per-industry basis. The
                model can identify the economic impacts of COVID-19 on a
                geographically targeted scale, and on a per industry basis.
                The findings can be leveraged by governments and private equity
                managers to better understand how COVID-19 will continue to
                effect certain industries in certain locations.
            </p>
            <h2>Business Risk Index</h2>
            <p>
                This project uses device location data from SafeGraph for
                millions of businesses (POIs) throughout the United States. By
                considering foot traffic patterns, in-store dwell time, visitor
                density, and publicly available COVID-19 data, our model can:
                <ul>
                    <li>
                        Identify POI hotspots for potential secondary disease
                        transmission or community spread.
                    </li>
                    <li>
                        Provide clear and accurate statistics around total
                        visits, average dwell time, and the number of
                        transmissions at each POI at the county level and across
                        different business categories.
                    </li>
                    <li>
                        Show total monthly visits to POIs to shine a spotlight
                        on the most-visited POIs or business categories to paint
                        a clearer picture around consumer mobility. 
                    </li>
                </ul>
            </p>
        </div>
    );
}
 
export default HSRProjects;