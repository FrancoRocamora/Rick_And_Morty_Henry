import styles from './About.module.css'

function About() {
    return(
       <div className={styles.container}>
            <div className={styles.name}>Dev Name: Franco Rocamora</div>
            <img className={styles.image} src='https://media.licdn.com/dms/image/D4D03AQF48jJoW5oy4Q/profile-displayphoto-shrink_800_800/0/1671058368109?e=1684368000&v=beta&t=wW5Hi3-80v0NW6VkX2Ov3CNPle-DMtKxZNrYrM4TE3k'
             alt='Profile'/>
            <div className={styles.specs}>
                <div className={styles.specie}>Specie: Human</div>
                <div className={styles.gender}>Gender: Male</div>
                <p className={styles.description}>My name is Franco Rocamora. Im learning full-stack developer in Henry's bootcamp.
                    I started this course with some basic knowledge about programming and four weeks later
                    i'm here doing this app with a lot of tools (React, Redux, JS, CSS, HTML).
                    Hope i can get a job in the area on a near future. 
                    Next week i will be learning about back-end tools and implementing a server for this app.
                    And last but no least will be one week of data bases. Hope to see this project in a month. Cheers
                </p>
            </div>
       </div>
    )
}


export default About;