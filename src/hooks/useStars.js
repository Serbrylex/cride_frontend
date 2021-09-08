import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export const useStars = (number = 0, size) => {
	
	const items = []
	
	if (number == 0 || number == null){
		for (var i = 0; i <= 5; i++) {
	  		items.push(<BsStar key={i} size={`${size}px`} />)	
		}		
	}else{
		let numberInt = Math.floor(number)
		let numberDot = number - numberInt

		for (var i = 0; i <= numberInt; i++) {
		  items.push(<BsStarFill key={i} size={`${size}px`} />)	
		}
		
		if (numberInt < 5 && numberDot!=0 && numberDot!=numberInt) {
			items.push(<BsStarHalf key={6} size={`${size}px`} />)		
			numberInt++
		}

		if (numberInt < 5) {
			for (var i = numberInt; i <= 5; i++) {
			  items.push(<BsStarFill key={i} size={`${size}px`} />)	
			}	
		}
	}

	return items
}