// Target positions:
// Red circle target: x: 20px, y: 300px;
// Blue circle target: x: 400px, y: 300px;
// Green circle target: x: 400px, y: 20px;

// translateOneByOne - Should translate the circles one at a time from their random start position to their target see the target positions below. Log something out after each element has been moved
async function translateOneByOne() {
    try {
        const positionRed = await moveElement(document.querySelector("li:nth-child(1)"), { x: 20, y: 300 });
        const positionblue = await moveElement(document.querySelector("li:nth-child(2)"), { x: 400, y: 300 });
        const positiongreen = await moveElement(document.querySelector("li:nth-child(3)"), { x: 400, y: 20 });
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Element has been moved");
    }
}
translateOneByOne();
// translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. Log out something after all elements have been moved
async function translateAllAtOnce() {
    try {
        const allMovement = [
            moveElement(document.querySelector("li:nth-child(1)"), { x: 20, y: 300 }),
            moveElement(document.querySelector("li:nth-child(3)"), { x: 400, y: 20 }),
            moveElement(document.querySelector("li:nth-child(2)"), { x: 400, y: 300 })];

        const toTargetPosition = await Promise.all(allMovement)
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Element has been moved");
    }
}

 translateAllAtOnce();
