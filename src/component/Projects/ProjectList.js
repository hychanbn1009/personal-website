import CVMaker from '../../assets/images/CV-Maker.png'
import Blog from '../../assets/images/Blog.png'
import Calculator from '../../assets/images/calculator.png'
import Members from '../../assets/images/Members-Only.png'
import ShoppingCart from '../../assets/images/Shopping-Cart.png'
import TicTacToe from '../../assets/images/Tic-Tac-Toe.png'


const ProjectList=[
    {
        "name": "My Blog",
        "description": "A blog website allows users create and publish posts. Other users can read and post their comments. The backend was developed by NodeJS and ExpressJS, and the frontend was built by React and Bootstrap. It also used PassportJS for user authentication and MongoDB for database",
        "technologies":["HTML5","CSS3","Javascript","ReactJS","NodeJS","ExpressJS","Bootstrap","Heroku","MongoDB"],
        "liveDemo":"https://hychanbn1009.github.io/The_Odin_Project-blog-client/",
        "repo":"https://github.com/hychanbn1009/The_Odin_Project-blog-client",
        "image":Blog
    },
    {
        "name": "Members Only",
        "description": "A Member message board allows users create and publish message. Only member can view the author and posted date. The backend was developed by NodeJS and ExpressJS, and the frontend was built by Jade and Bootstrap. It also used PassportJS for user authentication and MongoDB for database",
        "technologies":["Jade","CSS3","Javascript","Bootstrap","NodeJS","ExpressJS","Heroku","MongoDB"],
        "liveDemo":"https://warm-basin-93477.herokuapp.com/",
        "repo":"https://github.com/hychanbn1009/The_Odin_Project-Members-Only",
        "image":Members    
    },
    {
        "name": "Shopping Cart",
        "description": "A Shopping Cart Website allow users add product and change the numbers of items. This project was developed by React and Bootstrap. The main idea is to demonstrate the props control",
        "technologies":["HTML5","CSS3","Javascript","ReactJS","Bootstrap"],
        "liveDemo":"https://hychanbn1009.github.io/shopping-cart/",
        "repo":"https://github.com/hychanbn1009/shopping-cart",
        "image":ShoppingCart
    },
    {
        "name": "CV Maker",
        "description": "CV Maker allows user input information to create resume. User can export their resume in pdf format. But the preview part is not really responsive in tablet or moblie.",
        "technologies":["HTML5","CSS3","Javascript","ReactJS"],
        "liveDemo":"https://hychanbn1009.github.io/cv-project/",
        "repo":"https://github.com/hychanbn1009/cv-project",   
        "image": CVMaker
    },
    {
        "name": "Tic-Tac-Toe",
        "description": "Tic-Tac-Toe is a simple game to test Javascript syntax",
        "technologies":["HTML5","CSS3","Javascript","ReactJS"],
        "liveDemo":"https://hychanbn1009.github.io/The_Odin_Project-tic-tac-toe/",
        "repo":"https://github.com/hychanbn1009/The_Odin_Project-tic-tac-toe",  
        "image": TicTacToe
    },
    {
        "name": "Calculator",
        "description": "A simple calculator to test Javascript, HTML5 and CSS3 syntax. It can do some simple calculation.",
        "technologies":["HTML5","CSS3","Javascript"],
        "liveDemo":"https://hychanbn1009.github.io/The_Odin_Project-Calculator/",
        "repo":"https://github.com/hychanbn1009/The_Odin_Project-Calculator",  
        "image": Calculator
    },
]

export default ProjectList