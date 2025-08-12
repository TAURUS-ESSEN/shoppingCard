import { Link } from "react-router-dom";

const ErrorPage = () => {
 return (
 <div>
 <h1>О нет, этот маршрут не существует!</h1>
 <Link to="/">Нажмите здесь, чтобы вернуться на главную страницу</Link>
 </div>
  );
};
export default ErrorPage;