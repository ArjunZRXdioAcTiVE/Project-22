class Rope{
	constructor(xp, yp, stiffness, length, body1)	{

		this.body1 = body1;

		this.constraint = Constraint.create ({
			pointA: {x: xp, y: yp},
			bodyB: this.body1,
			length: length,
			stiffness: stiffness,
		});
		World.add (world, this.constraint);
	}
	 
	display () {
		push ();
		stroke ("white");
		strokeWeight (3);
		line (this.constraint.pointA.x, this.constraint.pointA.y, this.body1.position.x, this.body1.position.y);
		pop ();
	}
}
