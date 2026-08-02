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

        let coursesToDo = [];
        for (let i = 0; i < numCourses; i++) {
            if (!courseToPrerequisites.has(i)) {
                coursesToDo.push(i);
            }
        }

        for (let i = 0; i < coursesToDo.length; i++) {
            if (!prerequisiteToCourses.has(coursesToDo[i])) {
                continue;
            }
            for (const lockedCourse of prerequisiteToCourses.get(coursesToDo[i])) {
                courseToPrerequisites.get(lockedCourse).delete(coursesToDo[i]);
                if (courseToPrerequisites.get(lockedCourse).size <= 0) {
                    courseToPrerequisites.delete(lockedCourse);
                }
                if (!courseToPrerequisites.has(lockedCourse)) {
                    coursesToDo.push(lockedCourse);
                }
            }
            prerequisiteToCourses.delete(coursesToDo[i]);
        }

        return courseToPrerequisites.size === 0;
    }
}
