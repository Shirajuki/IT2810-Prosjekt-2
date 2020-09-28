import React, { Component } from "react";
import InstallationDisplay from "./InstallationDisplay";
import Favourites from "./Favourites";
type slideType = {
	title: string;
}
interface IProps {
	setModal: (title:string) => void;
}
interface SlideshowProps {
	slides: slideType[];
	setModal: (title:string) => void;
}
interface SlideshowState {
	count: number;
}
class Slide extends Component<SlideshowProps,SlideshowState> {
	constructor(props: SlideshowProps) {
		super(props);
		this.state = {count: 0};
	}
	changeSlide() {
		this.setState({count: (this.state.count+1)%this.props.slides.length});
	}
	setSlide(n: number) {
		this.setState({count: n});
	}
	render() {
		return (
			<div className="Slideshow">
				<Display count={this.state.count} slides={this.props.slides} setSlide={this.setSlide.bind(this)} changeSlide={this.changeSlide.bind(this)} setModal={this.props.setModal}/>
			</div>
		);
	}
}
const Display = (props: {count: number, slides: slideType[], setSlide: (n: number) => void, changeSlide: () => void, setModal: (title:string) => void}) => {
	return (
		<div className="splash">
			<div className={`div1 ${props.count === 0 ? "active" : "inactive"}`} onClick={() => props.setSlide(0)}>
				<InstallationDisplay title={props.slides[0].title}></InstallationDisplay>
				<div>
					<p className="titlefont">{props.slides[0].title}</p>
				</div>
			</div>
			<div className={`div2 ${props.count === 1 ? "active" : "inactive"}`} onClick={() => props.setSlide(1)}>
				<InstallationDisplay title={props.slides[1].title}></InstallationDisplay>
				<div>
					<p className="titlefont">{props.slides[1].title}</p>
				</div>
			</div>
			<div className={`div3 ${props.count === 2 ? "active" : "inactive"}`} onClick={() => props.setSlide(2)}>
				<InstallationDisplay title={props.slides[2].title}></InstallationDisplay>
				<div>
					<p className="titlefont">{props.slides[2].title}</p>
				</div>
			</div>
			<div className="div4">
				<div>
					<h1 className="title">{props.slides[props.count].title}</h1>
				</div>
			</div>
			<div className="div5">
				<InstallationDisplay onClick={() => props.setModal(props.slides[props.count].title)} title={props.slides[props.count].title}></InstallationDisplay>
				<div className="btnWrapper">
					<button className="button" onClick={() => props.changeSlide()}>></button>
				</div>
			</div>
		</div>

	);
}
const slides: slideType[] = [
	{
		title: Favourites.arts[0],
	},
	{
		title: Favourites.arts[1],
	},
	{
		title: Favourites.arts[2],
	},
];
function Slideshow( props: IProps ) {
	return (
		<Slide slides={slides} setModal={props.setModal}/>
	);
}

export default Slideshow;
