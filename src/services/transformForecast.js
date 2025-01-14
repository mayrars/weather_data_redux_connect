import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data => (
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 13 ||
        moment.unix(item.dt).hour() === 16 ||
        moment.unix(item.dt).hour() === 22
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);

export default transformForecast;