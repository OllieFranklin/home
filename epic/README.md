## MDDN 242 2020 Assignment 2

There are 15 parameters for the letters, which basically summarize to:
For each shape (so * 3)
	Shape type (eg tri, circ or rect)
	Shape pos1X
	Shape pos1Y
	Shape pos2X
	Shape pos2Y

The circles and rectangles are drawn using CORNERS mode, so pos1 and pos2 define the left top and bottom right corners of the shape.
By using CORNERS, it removes the need for me to define the size of the shape explicitly.
The triangles are drawn with a tiny bit of math. Pos1 is always the point when it's the only point on that particular y coordinate, and pos2 is always the point with another point on the same y coordinate. Point 3 on the triangle is found by find the difference between pos1x and pos2x, * by 2 to get width, and the y is the as pos2. My triangles are always isoceles triangles, with symmetry across the y axis.


My letter form is called Peachy Popsicle, or PeachPop for the 8 letter limit. This plays off both the colour scheme, and the ice block-like nature of many of the characters. I think the name reflects the fun and sweet looking nature of the letter form itself.
This project as a whole, I had a lot of different emotions about it. I was nervous at the start, as it seemed like such a complicated and daunting project to tackle, but now in the end, I had a lot of fun with it and I'm really happy with the outcome of my work. 
My original intention, which pretty much still stands to date, was to create a very readable letter form only using very basic shapes. I feel like I have achieved this successfully. I went into the project having drawn out how I want each letter/number to look like across a couple post-it notes. For the most part, majority of the characters have stayed fairly true to that original, paper draft. 
The way I chose to utilize my parameters did limit me in several ways. The triangles I used were limited to being isoceles with symmetry across the y axis, and my rects always had to be perfectly straight, no angles. These limitations very much affected how I approached letters such as N, S, and Z, characters with very defining use of a diagonal slope. As a result, these might be the characters I am least satisfied with.
I also had originally wanted to implement my numbers in the form of roman numerals,  but my 3 shape limit prevented that, as the representation of 8 (VIII) would've required 4 shapes at minimum. I didn't feel this limitation was big enough to justify me raising the shape limit (would've had me at 20 parameters), so I settled for using roman numerals for just numbers 1, 2 and 3.
I think the only really challenge or roadblock I faced working on this project was the interpolation. Seeing as I took a bit of a different path with my letterform, for the most part, the parameters between characters weren't easily interchangable: some letters didn't use all 3 shapes, some used all triangles while others used all rectangles. Trying to figure out how to make this animation between such different characters took me a while. The result of this is 100+ lines of code, checking all the possible difference cases between characters, for each of the 3 shapes in each character. I really wish there was a way for this code to make use of functions, but from my attempts and observations, it just wasn't possible to resuse a function across multiple shapes due to the parameters of the letterform. 
