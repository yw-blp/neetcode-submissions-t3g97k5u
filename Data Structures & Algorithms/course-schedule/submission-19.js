class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if (prerequisites.length === 0) {
            return true;
        }

        let prerequisiteToCourses = new Map();
        let coursesWithPrerequisites = new Set();
        let courseToPrerequisites = new Map();

        for (const [prerequisite, course] of prerequisites) {
            if (!prerequisiteToCourses.has(prerequisite)) {
                prerequisiteToCourses.set(prerequisite, new Set());
            }
            if (!courseToPrerequisites.has(course)) {
                courseToPrerequisites.set(course, new Set());
            }
            prerequisiteToCourses.get(prerequisite).add(course);
            courseToPrerequisites.get(course).add(prerequisite);
        }

        //console.log(prerequisiteToCourses);
        //console.log(courseToPrerequisites);

        let coursesToDo = new Set();
        let finishedCourses = new Set();
        for (let i = 0; i < numCourses; i++) {
            //if (!prerequisiteToCourses.has(i)) {
            //    prerequisiteToCourses.set(i, new Set());
            //}
            if (!courseToPrerequisites.has(i)) {
                coursesToDo.add(i);
            }
        }

        //console.log(coursesToDo);
        //console.log(prerequisiteToCourses);
        //console.log(courseToPrerequisites);

        for (const course of coursesToDo) {
            coursesToDo.delete(course);
            finishedCourses.add(course);

            if (!prerequisiteToCourses.has(course)) {
                continue;
            }
            for (const lockedCourse of prerequisiteToCourses.get(course)) {
                courseToPrerequisites.get(lockedCourse).delete(course);
                if (courseToPrerequisites.get(lockedCourse).size <= 0) {
                    courseToPrerequisites.delete(lockedCourse);
                }
                if (!courseToPrerequisites.has(lockedCourse)) {
                    coursesToDo.add(lockedCourse);
                }
            }
            prerequisiteToCourses.delete(course);
        }

        //console.log(finishedCourses);

        return (finishedCourses.size === numCourses);
    }
}
