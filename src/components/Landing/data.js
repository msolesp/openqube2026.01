import React from 'react';
import charts from './charts';
import historic_charts from './historic-charts';
// import GraphV from '../Section/Components/Graph';

// si al momento de publicar la nueva versión de la encuesta existe un cepo cambiario y
// un tipo de cambio desdoblado en oficial/ahorro, agregar la fecha de publicación aquí.
const hayDolarAhorro = ['2020-02-02', '2020-08-15', '2021-02-15', '2021-08-23', '2022-02-21', '2023-01-07', '2023-07-07', '2024-06-03', '2024-01-14'];

function sortBySalary(salaries) {
    return salaries.sort((a, b) => bestSalary(b) - bestSalary(a));
}

function bestSalary(s) {
    return Math.max(s["Junior"], s["Semi-Senior"], s["Senior"]);
}

let genders = ['Hombre Cis', 'Mujer Cis', 'Otros', 'Prefiero no decir']


export default [
    { // category
        title: 'Introducción',
        content: (
            <div>
                <p>
                    En OpenQube trabajamos para ofrecer información actualizada sobre empleos en el campo de tecnología de la información para que puedas acceder a ella fácilmente. ¿Cómo lo logramos? A través de nuestra plataforma colaborativa, en la que podés evaluar las empresas en las que trabajaste y ayudar a otros a tomar decisiones informadas sobre su carrera.
                </p>
                <p>
                    Desde 2014, llevamos a cabo encuestas salariales dentro de la comunidad tecnológica y publicamos los resultados en el <a href="https://sysarmy.com.ar/blog/" target="_blank" rel="noopener noreferrer">blog de Sysarmy</a>.
                </p>
                <p>
                    En 2019, comenzamos a analizar los resultados de estas encuestas. Nuestros informes pasados están acá:
                    <ul>
                        <li><a href="https://openqube.io/encuesta-sueldos-2019.01" target="_blank" rel="noopener noreferrer">2019.01</a></li>
                        <li><a href="https://openqube.io/encuesta-sueldos-2019.02" target="_blank" rel="noopener noreferrer">2019.02</a></li>
                        <li><a href="https://openqube.io/encuesta-sueldos-2020.01" target="_blank" rel="noopener noreferrer">2020.01</a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2020.02/" target="_blank" rel="noopener noreferrer">2020.02</a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2021.01/" target="_blank" rel="noopener noreferrer">2021.01 </a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2021.02/" target="_blank" rel="noopener noreferrer">2021.02 </a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2022.01/" target="_blank" rel="noopener noreferrer">2022.01 </a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2023.01/" target="_blank" rel="noopener noreferrer">2023.01 </a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2023.02/" target="_blank" rel="noopener noreferrer">2023.02 </a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2024.01/" target="_blank" rel="noopener noreferrer">2024.01 </a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2025.01/" target="_blank" rel="noopener noreferrer">2025.01 </a></li>
                    </ul>
                </p>
                <p>
                    Con la intención de presentar a nuestra comunidad los resultados de forma más accesible, seleccionamos algunos datos estadísticos que consideramos relevantes. Para una mejor comprensión de los mismos, recomendamos leer el apartado de <a href="#Metodologia">Metodología</a>.
                </p>
                <p>
                    A continuación te mostramos los resultados del nuevo análisis para junio - julio 2025.
                </p>
                <br />
                <div className='authors-wrapper'>
                    <left>
                        <small>
                            El presente informe fue realizado para openqube por <a className='author-name' href='https://www.linkedin.com/in/mar%C3%ADa-sol-espain-641ba013b/' target="_blank" rel="noopener noreferrer">Sol Espain</a> y <a className='author-name' href='https://linktr.ee/rodrigofdiaz' target="_blank" rel="noopener noreferrer">Rodrigo Díaz</a>.
                        </small>
                    </left>
                    <p>
                        <hr size="8px" color="black" />
                    </p>
                    <small>
                        (basado en los trabajos previos de <a className='author-name' href='https://www.linkedin.com/in/nadiakazlauskas/' target="_blank" rel="noopener noreferrer">Nadia Kazlauskas</a>, <a className='author-name' href='https://www.linkedin.com/in/fernandezpablo85/' target="_blank" rel="noopener noreferrer">Pablo Fernandez</a>, <a className='author-name' href='https://twitter.com/luscastro' target="_blank" rel="noopener noreferrer">Luciana Castro</a>, <a className='author-name' href='https://twitter.com/gerardobort' target="_blank" rel="noopener noreferrer">Gerardo Bort</a>, <a className='author-name' href='https://ar.linkedin.com/in/pcasas' target="_blank" rel="noopener noreferrer">Pablo Casas</a>, <a className='author-name' href='https://ar.linkedin.com/in/leonardo-genzano-1b275193/' target="_blank" rel="noopener noreferrer">Leonardo Genzano</a>, <a className='author-name' href='https://twitter.com/cocodibuja' target="_blank" rel="noopener noreferrer">Nico Quiroz</a>, <a className='author-name' href='https://twitter.com/larilopezcalvo' target="_blank" rel="noopener noreferrer">Lara López Calvo</a> y <a className='author-name' href='https://www.linkedin.com/in/benitezjuanm/' target="_blank" rel="noopener noreferrer">Juan Manuel Benítez</a>)
                    </small>
                    <a href="https://sysar.my/discord" target="_blank" rel="noopener noreferrer">
                        <img src="discord-683x90.jpg" style={{ "margin-top": "20px", width: "100%", height: "auto" }}></img>
                    </a>
                </div>
            </div>
        )
    },
    { // category
        title: 'Perfil de participantes',
        content: (
            <div>
                <center>
                    <p><strong>{charts['total_surveyed']}</strong> fueron las respuestas totales en la República Argentina.</p>
                    <p><strong>{charts['total_analyzed_surveyed']}</strong> respuestas fueron consideradas en el presente análisis, es decir un <strong>{Math.round(charts['total_analyzed_surveyed'] / charts['total_surveyed'] * 100)}%</strong> del total.</p>
                </center>
            </div>
        ),
        data: [
            { // sub-category
                title: 'Regiones',
                data: [
                    {  // section
                        title: 'Porcentaje de participantes por región de la Argentina',
                        data: [
                            {  // tab
                                title: 'Geografía',
                                component: 'MapArgentina', // graph
                                props: { ...charts['regions_percent'], isPercentual: true },
                                caption: 'Mapa de participación en la encuesta por regiones del país.',
                                description: 'La intensidad del color es sólo representativa.',
                            },
                            {  // tab
                                title: 'Nivel de participación',
                                component: 'Barh', // graph
                                props: { ...charts['regions_percent'], isPercentual: true },
                                caption: 'Porcentaje de participantes de la encuesta por región del país.',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Roles',
                data: [
                    {  // section
                        title: 'Porcentaje de participantes por tipo de rol',
                        data: [
                            {  // tab
                                title: 'Nivel de participación',
                                component: 'Barh', // graph
                                props: { ...charts['roles_percent'], isPercentual: true, cutoff: 15 },
                                caption: <p>Porcentaje de personas encuestadas por rol.</p>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Experiencia',
                data: [
                    {  // section
                        title: 'Años de experiencia',
                        subtitle: 'subtitle',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_percent'], isPercentual: true, decimalPlaces: 2 },
                                caption: 'Porcentaje de personas encuestadas según años de experiencia en la profesión.',
                                description: (<p>En esta sección, los datos fueron agrupados por rangos de años, en conjuntos arbitrarios.
                                    <br>
                                    </br>
                                    Se observan valores similares a los de la <a href="https://sueldos.openqube.io/encuesta-sueldos-2025.01/" target="_blank" rel="noopener noreferrer">encuesta anterior</a>.
                                </p>)
                            },
                        ],
                    },
                    {  // section
                        title: 'Años en la compañía actual',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_in_company'], isPercentual: true },
                                caption: 'Porcentaje de personas encuestadas según años de antigüedad en su compañía actual',
                                description: (<div>
                                    <p>
                                        El {parseFloat(charts['years_in_company_2_or_less'].data.map(item => item.value) * 100).toFixed(0)}% de las personas encuestadas tiene 2 o menos años en su compañía actual.
                                    </p>
                                </div>)
                            },
                        ],
                    },
                    {  // section
                        title: 'Años en el puesto actual',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_in_position'], isPercentual: true },
                                caption: 'Porcentaje de personas encuestadas según años de antigüedad en su puesto actual.',
                                description: (
                                    <div>
                                        <p>
                                            El {parseFloat(charts['years_in_position_2_or_less'].data.map(item => item.value) * 100).toFixed(0)}% de las personas que respondieron la encuesta trabaja hace menos de 3 años en su puesto actual.
                                        </p>
                                    </div>

                                )
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Educación',
                content: (
                    <div>
                        <p>Del total de respuestas consideradas, solo el {charts['ans_educ_percent']}% respondió la sección de educación. Esto equivale a {charts['ans_educ']} respuestas.</p>
                    </div>
                ),
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzado y estado actual',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['education_stacked'], isPercentual: true, isStacked: true },
                                caption: 'Este gráfico muestra el porcentaje de personas encuestadas que alcanzaron cada nivel de estudios, así como el grado de completitud o estado de sus carreras.',
                                description: (
                                    <div>
                                        <p>
                                            Aproximadamente el 22% de las personas encuestadas no ha finalizado estudios universitarios.
                                        </p>

                                    </div>
                                )
                            },
                        ],
                    },
                    {
                        title: '¿Cuáles son las carreras más estudiadas?',
                        data: [
                            { // tab
                                title: 'Carreras',
                                component: 'Barh',
                                props: { ...charts['careeres_percent'], isPercentual: true, cutoff: 15 },
                                caption: '',
                                description: (<div>
                                    <p>
                                        Algunos nombres de carreras fueron normalizados para la elaboración de este gráfico.<br /> Para más información, ver la <a href="#Metodologia">Metodología</a>.
                                    </p>
                                </div>),
                            },
                            { // tab
                                title: 'Carreras y estado',
                                component: 'Barh',
                                props: { ...charts['careeres_stacked_percent'], isPercentual: true, cutoff: 10, isStacked: false, markNegativeValues: ['Completo', 'En curso', 'Incompleto'], },
                                caption: <p>Aquí podemos ver de manera comparativa, por cada carrera, cuál es el estado para la muestra.</p>,
                                description: (<div>
                                    <p>
                                        Este gráfico podría ayudarnos a entender qué carreras suelen "completarse más que otras" y analizar el nivel de deserción en cada una, a grandes rasgos, e independientemente de la casa de estudios.
                                    </p>
                                </div>),
                            },
                        ],
                    },
                    {
                        title: '¿Cuáles son las Universidades más concurridas?',
                        data: [
                            { // tab
                                title: 'Universidades',
                                component: 'Barh',
                                props: { ...charts['universities_percent'], isPercentual: true, cutoff: 10 },
                                caption: <p>Los nombres de las casas de estudio fueron normalizados para la elaboración de este gráfico.<br /> Para más información, ver la <a href="#Metodologia">Metodología</a>.</p>,
                                description: '',
                            },
                            { // tab
                                title: 'Universidades y estado de las carreras',
                                component: 'Barh',
                                props: { ...charts['universities_stacked_percent'], isPercentual: true, cutoff: 10 },
                                caption: <p>Aquí se puede apreciar de manera comparativa, por cada casa de estudio, cuál es el estado de sus carreras para la muestra.</p>,
                                description: (<div>
                                    <p>
                                        Este gráfico podría ofrecernos una visión general del nivel de deserción en cada institución educativa.
                                        Es importante señalar que para muchas universidades, especialmente las que están más abajo en la lista, la cantidad de muestras puede ser muy baja y no representativa de la realidad de esas instituciones.
                                    </p>
                                </div>),
                            },
                        ],
                    },

                ],
            },
            { // sub-category
                title: 'Demografía',
                data: [
                    {  // section
                        title: 'Identidad de género',
                        data: [
                            {  // tab
                                title: 'Porcentaje',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_percent_all'], isPercentual: true },
                                description: <div>
                                    <p>Para mayor detalle sobre este tópico, recomendamos ver el apartado de <a href="#Genero">Género</a>.</p>
                                    <p>Si te preguntás por qué no hay tantas mujeres, tal vez esta <a target="_blank" rel="noopener noreferrer" href="http://www.mujeresprogramadoras.com.ar">investigación de Chicas En Tecnología</a> te pueda dar una respuesta.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Absoluto',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_absolute_all'], isPercentual: false },
                                description: <div>
                                    <p > Representatividad (en valor absoluto) según identidad de género</p>

                                </div>,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Salarios',
        content: (
            <div>
                <p>Todos los valores de salarios aquí expresados, tanto en moneda local como en dólares, refieren a <strong>salario bruto</strong>: previo a <i>cargas sociales</i> e <i>impuestos</i>.</p>
            </div>
        ),
        data: [
            { // sub-category
                title: 'Progresión histórica',
                content: (
                    <div>
                        <p>Gracias a que contamos con resultados de encuestas anteriores, podemos medir la evolución de ciertos indicadores a lo largo del tiempo.</p>
                        <p>En el caso de los salarios en Argentina, es de particular interés conocer su evolución, debido a las continuas fluctuaciones de la moneda y la inflación.</p>
                        <p>En los siguientes gráficos podremos observar cómo han cambiado las medianas salariales y compararlas con su valor correspondiente en dólares según la cotización de cada período.</p>
                        <p>En esta edición incorporamos un análisis adicional que ajusta los salarios históricos a pesos constantes, teniendo en cuenta la inflación de cada período. Esto nos permite observar la evolución del poder adquisitivo real de los salarios a lo largo del tiempo.</p>
                    </div>
                ),
                data: [
                    {  // section
                        title: 'Mediana salarial en Argentina',
                        data: [
                            {  // tab
                                title: 'Salarios en AR$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Pesos Argentinos'], currency: 'AR$' },
                                caption: <p>Serie histórica de salarios en ARS basada en encuestas anteriores de sysarmy.</p>,
                                description: <p>
                                    Desde enero de 2025 hasta julio de 2025 se registró en la República Argentina una inflación de <a target="_blank" rel="noopener noreferrer" href="https://calculadoradeinflacion.com/argentina.html?md=enero&ad=2025&mh=julio&ah=2025&q=100&s=cpi"> 15%</a> según el <a target="_blank" rel="noopener noreferrer" href="https://www.indec.gob.ar/">INDEC</a>. Según los datos históricos de esta encuesta, en aproximadamente el mismo intervalo de tiempo, la mediana salarial aumentó un 26%.
                                    <br></br>
                                    <br></br>
                                </p>,
                            },
                            {  // tab
                                title: 'Salarios en AR$ constantes ajustados por IPC',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Pesos Argentinos Constantes Ajustados Por Inflación'], currency: 'AR$' },
                                caption: <p>Serie histórica de salarios en ARS constantes basada en encuestas anteriores de sysarmy.</p>,
                                description: <p>
                                    Este gráfico muestra los salarios ajustados a pesos constantes de julio de 2025, es decir, considerando la inflación acumulada en cada período.
                                    Esto permite comparar el poder adquisitivo real de los salarios a lo largo del tiempo, eliminando el efecto de la inflación.
                                    Un aumento en los valores indica una mejora en el poder adquisitivo real, mientras que una disminución refleja que los salarios, aunque nominalmente puedan haber crecido, no han acompañado el ritmo de la inflación, resultando en una pérdida de capacidad de compra. Para más detalle, ver la <a href="#Metodologia">Metodología</a>.
                                    <br></br>
                                </p>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (oficial)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar estadounidense, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Si bien los salarios en Argentina son mayormente en Pesos Argentinos, una forma fácil de medir el poder adquisitivo independientemente del momento, es a través de una moneda con mayor estabilidad.
                                    </p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (ahorro)',
                                component: 'Line', // graph
                                props: {
                                    // {"name": "0", "year": 2014, "part": 2, "publish_date": "2015-01-01", "Pesos Argentinos": 14000.0, "D\\u00f3lares Estadounidenses": 1637.0343952619544}
                                    data: historic_charts['historic_salary_medians'].data
                                        .reduce((acc, dp) => acc.concat([{ ...dp, 'Dólares Estadounidenses': (hayDolarAhorro.includes(dp.publish_date) ? 0.6 : 1) * dp['Dólares Estadounidenses'] }]), []),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Dólares Estadounidenses'],
                                    currency: 'US$'
                                },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar ahorro, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Un dato importante a tener en cuenta a la hora de evaluar nuestro sueldo es considerar la capacidad de ahorro.
                                    </p>
                                    <p>
                                        Como en cada entrega de nuestros informes, siempre aparece alguna variación inesperada que puede resultar de interés para el lector.
                                        En esta oportunidad el desdoblamiento del dólar continúa siendo protagonista, con la particularidad que a diferencia de años anteriores
                                        existe tanto un cepo cambiario, así como también un precio único (mínimo al día de hoy) para ahorrar en dólares.
                                    </p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (Blue)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses Blue'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar Blue, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Un dato importante a tener en cuenta a la hora de evaluar nuestro sueldo es considerar la capacidad de ahorro .
                                    </p>
                                    <p>
                                        Como en cada entrega de nuestros informes, siempre aparece alguna variación inesperada que puede resultar de interés para el lector.
                                        En esta oportunidad el desdoblamiento del dólar continúa siendo protagonista, con la particularidad que a diferencia de años anteriores
                                        existe tanto un cepo cambiario, así como también un precio único (mínimo al día de hoy) para ahorrar en dólares.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (MEP)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses MEP'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar MEP, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>A partir de este informe incluimos las medianas salariales en Dólar MEP, ya que hoy en día es el tipo de cambio al que la mayoría de las personas puede acceder
                                        fácilmente para convertir sus ingresos en pesos a dólares. Este cálculo se muestra únicamente desde 2020, porque fue a partir de ese
                                        año que los bonos utilizados para esta operatoria comenzaron a ser consistentes y ampliamente aceptados, permitiéndonos contar con una cotización más clara y homogénea.
                                    </p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Contrato',
                data: [
                    {  // section
                        title: 'Sueldos dolarizados vs. sueldos en pesos argentinos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['sueldo_dolarizado_salary_median'].data
                                        .map(val => ({
                                            ...val,
                                            name: (val.name === 'True' ? 'Sueldo dolarizado' : 'Sueldo no dolarizado'),
                                        })),
                                    currency: 'AR$',
                                },
                                caption: 'Mediana salarial según sueldos dolarizados y experiencia.',
                                description: <div>
                                    <p>
                                        Las medianas salariales para puestos Semi-Senior y Senior pueden variar hasta un {charts["dif_dolarizado_max"]}% según si el sueldo se encuentra (al menos en una parte) dolarizado o no. En cambio, para roles Junior, no se observa una diferencia significativa. Para más detalle ver <a href="#Metodologia">Metodología</a>.
                                        <p>En <a href="#Trabajo-Tipos-de-contrato-Que-porcentaje-tiene-su-sueldo-dolarizado">este gráfico</a> se muestra el porcentaje de personas que gozan de este beneficio.</p>
                                    </p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Puesto',
                content: (
                    <div>
                        <p>Dada la diferencia salarial observada entre los sueldos en pesos argentinos y los sueldos dolarizados, a continuación se presentan las medianas salariales según el rol, la experiencia y el estado de dolarización del sueldo.</p>
                    </div>
                ),
                data: [
                    {  // tab
                        title: 'Salarios según rol y experiencia ',
                        data: [
                            {  // tab
                                title: 'Para salarios no dolarizados',
                                component: 'Barh', // graph
                                props: {
                                    data: sortBySalary(charts['roles_seniority_salary_median_non_dollarized'].data),
                                    cutoff: 20,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial por rol y años de experiencia en el puesto.',
                                description: <div>
                                    <p>El seniority aquí mencionado refiere a años de experiencia en el rol. Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Para salarios dolarizados',
                                component: 'Barh', // graph
                                props: {
                                    data: sortBySalary(charts['roles_seniority_salary_median_dollarized'].data),
                                    cutoff: 20,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial por rol y años de experiencia en el puesto.',
                                description: <div>
                                    <p>El seniority aquí mencionado refiere a años de experiencia en el rol. Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },

                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Educación',
                content: (
                    <div>
                        <p>Dada la diferencia salarial observada entre los sueldos que se perciben en pesos argentinos y los que están dolarizados, se muestra a continuación las medianas salariales según el nivel de educación alcanzado y el estado de dolarización del sueldo. </p>
                    </div>
                ),
                data: [
                    {  // section
                        title: 'Salarios según nivel de educación',
                        data: [
                            {  // tab
                                title: 'Educación formal',
                                component: 'BarhEd', // graph
                                props: {
                                    data: charts['nivel_estudios_salary_median'].data
                                        .sort((a, b) => b['Completo'] - a['Completo']),
                                    currency: 'AR$',
                                    markNegativeValues: ['No Dolarizado', 'Dolarizado'],
                                    individualNegatives: true,

                                },
                                caption: 'Mediana salarial por nivel de educación formal alcanzado y según dolarización del sueldo.',
                                description: <div>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>
                            },

                        ],
                    },
                    {  // section
                        title: 'Salarios según carrera y experiencia',
                        data: [
                            {  // tab
                                title: 'Recibidos por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_seniority_salary_median'].data,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial por carrera y años de experiencia.',
                                description: <div>
                                    <p>En este gráfico hemos incluído únicamente las personas que completaron sus estudios universitarios.</p>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Por carrera y estado',
                                component: 'BarhEd', // graph
                                props: {
                                    data: charts['carrera_estado_salary_median'].data
                                        .sort((a, b) => b['Completo'] - a['Completo']),
                                    currency: 'AR$',
                                    markNegativeValues: ['Completo', 'En curso', 'Incompleto'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial por carrera y estado de de la carrera.',
                                description: <div>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Tecnología',
                content: (
                    <div>
                        <p>Dada la diferencia salarial observada entre los sueldos que se perciben en pesos argentinos y los que están dolarizados, se muestra a continuación las medianas salariales según tecnología, experiencia y el estado de dolarización del sueldo. </p>
                    </div>
                ),
                data: [
                    {  // section
                        title: 'Según plataformas y experiencia',
                        data: [
                            {  // tab
                                title: 'Para salarios no dolarizados',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['plataformas_seniority_salary_median_non_dollarized'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial según plataformas y años de experiencia.',
                                description: <div>
                                    <p>Se muestra por defecto las plataformas más utilizadas, cuya cantidad de menciones supere el umbral de 0,5%. Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>
                            },
                            {  // tab
                                title: 'Para salarios dolarizados',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['plataformas_seniority_salary_median_dollarized'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial según plataformas y años de experiencia.',
                                description: <div>
                                    <p>Se muestra por defecto las plataformas más utilizadas, cuya cantidad de menciones supere el umbral de 0,5%.</p>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>
                            },
                        ],
                    },
                    {  // section
                        title: 'Según lenguajes de programación y experiencia',
                        data: [
                            {  // tab
                                title: 'Para salarios no dolarizados',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['lenguajes_de_programacion_seniority_salary_median_non_dollarized'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial según lenguaje de programación años de experiencia.',
                                description: <div>
                                    <p>Se muestra por defecto los lenguajes de programación más utilizadas, cuya cantidad de menciones supere el umbral de 0,5%.</p>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>
                            },
                            {  // tab
                                title: 'Para salarios dolarizados',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['lenguajes_de_programacion_seniority_salary_median_dollarized'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial según lenguaje de programación años de experiencia.',
                                description: <div>
                                    <p>Se muestra por defecto los lenguajes de programación más utilizadas, cuya cantidad de menciones supere el umbral de 0,5%.</p>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> no son confiables y deben ser tomadas con cuidado. Para más detalle ver <a href="#Metodologia">Metodología</a>.</p>
                                </div>
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Género',
        content: (
            <div>
                <p>En esta edición la pregunta sobre identidad de género es de tipo texto libre. Como resultado, el número de respuestas que suelen incluirse dentro de la categoría "Prefiero no decir" disminuyó respecto a ediciones anteriores. Para más detalles, revisar la <a href="#Metodologia">Metodología</a>.</p>
                <p>Si bien en este apartado mantuvimos la lógica general del informe de no incluir dentro de los gráficos los conjuntos que tuvieron una representación menor al 1% de la muestra, mencionamos aquellas identidades de género que están subrepresentadas en esta encuesta, hecho que refleja inequidades por múltiples barreras e injusticias sociales. </p>
                <p>Porcentajes de identidades de género menores al 1%:</p>
                <ul>
                    <li>Prefiero no decir {parseFloat(charts['gender_prefiero_no_decir'].data.map(item => item.value) * 100).toFixed(1)}%</li>
                    <li>No Binarie {parseFloat(charts['gender_no_binarie'].data.map(item => item.value) * 100).toFixed(1)}%</li>
                    <li>Queer {parseFloat(charts['gender_queer'].data.map(item => item.value) * 100).toFixed(2)}%</li>
                    <li>Trans {parseFloat(charts['gender_trans'].data.map(item => item.value) * 100).toFixed(2)}%</li>
                    <li>Agénero {parseFloat(charts['gender_agenero'].data.map(item => item.value) * 100).toFixed(2)}%</li>
                    <li>Género Fluido {parseFloat(charts['gender_fluido'].data.map(item => item.value) * 100).toFixed(2)}%</li>
                </ul>
                <p>Como es de esperar, las inequidades históricas y sistemáticas por género, se sostienen.</p>

                <h4>Algunos datos</h4>
                <ol>
                    <li>De las personas que participaron en la encuesta y respondieron a este ítem, aproximadamente el {parseFloat(charts['gender_hombre_cis'].data.map(item => item.value) * 100).toFixed(0)}% son hombres cis, mientras que el {parseFloat(charts['gender_mujer_cis'].data.map(item => item.value) * 100).toFixed(0)}% son mujeres cis.</li>
                    <li>Se observan valores similares al período anterior.</li>
                    <li>Según los datos recopilados, la brecha salarial entre hombres cis y mujeres cis se acentúa a medida que aumentan los años de experiencia de la población encuestada.</li>
                    <li>Es importante notar que, a pesar de tener logros académicos destacados entre las mujeres cis, la brecha salarial persiste en todos los niveles.</li>

                </ol>
            </div>
        ),
        data: [
            { // sub-category
                title: 'Identidad de género',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: 'Porcentaje',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_percent'], isPercentual: true },
                                description: <div>
                                    <p>Si te preguntás por qué no hay tantas mujeres, tal vez esta <a target="_blank" rel="noopener noreferrer" href="http://www.mujeresprogramadoras.com.ar">investigación de Chicas En Tecnología</a> te pueda dar una respuesta.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Absoluto',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_absolute'], isPercentual: false },
                                description: <div>
                                    <p > Representatividad (en valor absoluto) según identidad de género</p>

                                </div>,
                            },
                        ],
                    },

                ],
            },
            { // sub-category
                title: 'Brecha salarial de género',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                component: 'Barh', // graph
                                props: { ...charts['gender_gap'], isPercentual: false },
                                title: '',
                                caption: (
                                    <div>
                                        <br>
                                        </br>
                                        Media salarial por género y seniority.
                                    </div>
                                ),
                                description: <div>
                                    <p>Se observa que la brecha salarial entre Hombres Cis y Mujeres Cis aumenta con la experiencia.</p>
                                </div>,
                            },
                        ],
                    },

                ],

            },
            { // sub-category
                title: 'Progresión histórica',
                data: [
                    {  // section
                        title: 'Histórico de nivel de participación',
                        data: [
                            {  // tab

                                component: 'Area', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_percent'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'([\w é]+)'\)$/)[1]]: row.count,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    isPercentual: true,
                                },
                                caption: 'Serie de tiempo de porcentaje de participación por género basada en encuestas anteriores.',
                            },




                        ],
                    },
                    {  // section
                        title: 'Histórico de salarios por género',
                        data: [
                            {  // tab
                                title: 'Salarios en ARS',
                                component: 'Line', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_salary_median'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'([\w é]+)'\)$/)[1]]: row.salary,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    currency: 'AR$',
                                    customStroke: { 'Otros': '#ccc' },
                                },
                                caption: 'Serie histórica de salarios en ARS basada en encuestas anteriores.',
                                description: (<div>
                                    Se observa la evolución salarial por género en pesos argentinos.
                                    <p>
                                    </p>
                                    Actualmente, por cada peso que gana un hombre cis, una mujer cis gana aproximadamente 83 centavos.
                                    <p>
                                        Al analizar el gráfico, es importante tener en cuenta que el {parseFloat(charts['gender_prefiero_no_decir'].data.map(item => item.value) * 100).toFixed(1)}% de las personas de la muestra prefirieron no decir su género.
                                    </p>

                                </div>),
                            },
                            {  // tab
                                title: 'Salarios en USD (Oficial)',
                                component: 'Line', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_salary_median_ofi'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'([\w é]+)'\)$/)[1]]: row.salary_usd_ofi,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    currency: 'AR$',
                                    customStroke: { 'Otros': '#ccc' },
                                },
                                caption: 'Serie histórica de salarios en USD oficial basada en encuestas anteriores.',
                                description: (<div>
                                    Se observa la evolución salarial por género en dólares estadounidenses según la cotización oficial.
                                    <p>
                                    </p>
                                    <p>
                                        Al analizar el gráfico, es importante tener en cuenta que el {parseFloat(charts['gender_prefiero_no_decir'].data.map(item => item.value) * 100).toFixed(1)}% de las personas de la muestra prefirieron no decir su género.
                                    </p>

                                </div>),
                            },
                            {  // tab
                                title: 'Salarios en USD (Blue)',
                                component: 'Line', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_salary_median_blue'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'([\w é]+)'\)$/)[1]]: row.salary_usd_blue,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    currency: 'AR$',
                                    customStroke: { 'Otros': '#ccc' },
                                },
                                caption: 'Serie histórica de salarios en USD blue basada en encuestas anteriores.',
                                description: (<div>
                                    Se observa la evolución salarial por género en dólares estadounidenses según la cotización paralela.
                                    <p>
                                    </p>
                                    <p>
                                        Al analizar el gráfico, es importante tener en cuenta que el {parseFloat(charts['gender_prefiero_no_decir'].data.map(item => item.value) * 100).toFixed(1)}% de las personas de la muestra prefirieron no decir su género.
                                    </p>

                                </div>),
                            },
                        ],
                    },
                    {  // section
                        title: 'Histórico de conformidad',
                        data: [
                            {  // tab
                                title: 'Conformidad con los salarios',
                                component: 'Line', // graph
                                props: {
                                    data: historic_charts['historic_acquiescence_means'].data
                                        .map(row => ({ ...row, Otros: row.Otros || undefined, publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] })), // remove 0 values
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    customStroke: { 'Otros': '#ccc' },
                                },
                                caption: 'Serie histórica del promedio del nivel de conformidad con los salarios basada en encuestas anteriores.',
                                description: 'Medido en escala de 1 (poco conforme) a 4 (muy conforme)',

                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Formación',
                content: <div>
                    <p>
                        En este apartado segmentamos los niveles de educación formal alcanzados y el grado de completitud de cada uno, por género.
                    </p>
                </div>,
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzados y completitud',
                        data: [
                            {  // tab
                                title: 'Hombres Cis',
                                component: 'Barh', // graph
                                props: { ...charts['education_hombre_cis_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de los hombres cis, y cuál es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de los hombres encuestados.'
                            },
                            {  // tab
                                title: 'Mujeres Cis',
                                component: 'Barh', // graph
                                props: { ...charts['education_mujer_cis_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de las mujeres cis, y cuál es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de las mujeres encuestadas.'
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Experiencia',
                data: [
                    {  // section
                        title: 'Salario por género según años de experiencia',
                        data: [
                            {  // tab
                                title: 'Salarios por experiencia',
                                component: 'Line', // graph
                                props: {
                                    data: charts['experience_gender_salary_median'].data,
                                    xDataKey: 'name',
                                    yDataKeys: ['Hombre Cis', 'Mujer Cis'],
                                    currency: 'AR$',

                                },
                                caption: 'Mediana salarial por género, según años de experiencia.',
                                description: (<div>
                                    La brecha salarial entre hombres cis y mujeres cis se acentúa a medida que aumentan los años de experiencia de la población encuestada.

                                </div>)
                            },
                        ],
                    },
                    {  // section
                        title: 'Participación por género según años de experiencia',
                        data: [
                            {  // tab
                                title: 'Mujeres Cis / No Decir / No Binaries',
                                component: 'Area', // graph
                                props: {
                                    data: charts['experience_gender_percent'].data,
                                    xDataKey: 'name',
                                    yDataKeys: ['Hombre Cis', 'Mujer Cis'],
                                    isPercentual: true,
                                },
                                caption: 'Nivel de participación por género, según años de experiencia.',
                                description: (<div>
                                    Se observa una menor participación de Mujeres Cis a medida que aumentan los años de experiencia.
                                </div>)
                            },
                        ],
                    },
                    {  // section
                        title: 'Conformidad',
                        data: [
                            {  // tab
                                title: 'Conformidad con los salarios',
                                component: 'Line', // graph
                                props: {
                                    data: charts['experience_gender_conformidad_mean'].data,
                                    xDataKey: 'name',
                                    yDataKeys: ['Hombre Cis', 'Mujer Cis'],
                                    customStroke: { 'No Binarie': '#ccc' },
                                },
                                caption: 'Conformidad con los salarios por género según años de experiencia.',
                                description: (<div>
                                    Medido en escala de 1 (poco conforme) a 4 (muy conforme).
                                </div>)

                            },
                        ],
                    },
                ]
            },
            { // sub-category
                title: 'Ajuste salarial',
                data: [
                    {  // section
                        title: 'Ajustes por inflación 2025',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['gender_salary_adjustment'].data
                                        .map(dp => ({ ...dp, name: dp.name + '\n' })), // hack to not highlight Otros (Barh default behavior for non-gender data)
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: 'Mediana de porcentaje de ajustes por inflación acumulados por género en los últimos 6 meses.',
                                description: <>
                                    <p>
                                        Como contraste, la inflación publicada por el <a href="https://www.indec.gob.ar/" target="_blank" rel="noopener noreferrer">INDEC</a> entre enero y julio de 2025 fue de <strong>15%</strong>.
                                    </p>
                                    <p>
                                        <small>
                                            Es importante tomar este numero con ciudado ya que en muchos casos no es posible distinguir si el sueldo está o no dolarizado y posiblemente existan
                                            casos donde, por tratarse de un sueldo dolarizado, no hubo ajustes por inflación.
                                        </small>
                                    </p>
                                </>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Posiciones de liderazgo',
                data: [
                    {  // section
                        title: 'Posiciones de liderazgo abierto por identidad de género',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['leadership_gender_percent'], isPercentual: true },
                                description: <div> Se define posición de liderazgo (Sí) la que tiene al menos 1 persona a su cargo.</div>,
                            },
                        ],
                    },

                ],
            },
        ],
    },
    { // category
        title: 'Tecnología',
        data: [
            { // sub-category
                title: 'Tecnologías más populares',
                data: [
                    {  // section
                        title: 'Plataformas',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['plataformas'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Plataformas más utilizadas entre los participantes',
                                description: 'Las plataformas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Lenguajes de Programación',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['lenguajes_de_programacion'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Lenguajes de programación más utilizadas entre los participantes',
                                description: 'Los lenguajes de programación no son excluyentes, es decir puede haber más de uno por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Frameworks, Herramientas y Librerías',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['frameworksherramientas_y_librerias'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Frameworks, Herramientas y Librerías más utilizadas entre los participantes',
                                description: 'Los mismos no son excluyentes, es decir puede haber más de uno por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Bases de Datos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['bases_de_datos'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Bases de datos más utilizadas entre los participantes',
                                description: 'Las bases de datos no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'QA / Testing',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['qa_testing'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Herramientas de QA / Testing más utilizadas entre los participantes',
                                description: <div>
                                    <p>Las mismas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.</p>
                                </div>,
                            },
                        ],
                    },
                    {  // section
                        title: '¿Qué tanto estás usando Copilot, ChatGPT u otras herramientas de IA para tu trabajo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['herramientas_ia'], isPercentual: true, isLogScale: false },
                                caption: 'Nivel de aplicación de las herramientas de IA en su trabajo',
                                description: <div>
                                    <p>Los valores son porcentuales sobre el total de participantes.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Trabajo',
        data: [
            { // sub-category
                title: 'Tipos de contrato',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['tipo_de_contrato_percent'], isPercentual: true },
                                caption: 'Porcentaje de tipos de contrato de trabajo..',
                            },
                        ],
                    }, {
                        title: '¿Qué porcentaje tiene su sueldo dolarizado?',
                        data: [
                            { // tab
                                title: 'Sueldos dolarizados',
                                component: 'Pie',
                                props: {
                                    data: charts['sueldo_dolarizado_percent'].data.map(val => ({
                                        ...val,
                                        name: (val.name === 'nan' ? 'No dolarizado' :
                                            val.name === 'Cobro parte del salario en dólares' ? 'Parcialmente dolarizado' :
                                                val.name === 'Cobro todo el salario en dólares' ? '100% dolarizado'
                                                    : 'Dolarizado pero cobra en ARS'),
                                    })),
                                    isPercentual: true,

                                },
                                caption: <p>Porcentaje de personas que tienen su sueldo dolarizado, ya sea de forma parcial o completa, y quienes no lo tienen.</p>,
                                description: <p>El {parseFloat(charts['porcentaje_sueldo_dolarizado'].data.map(item => item.value) * 100).toFixed(0)}%  de las personas tiene su sueldo dolarizado, al menos de manera parcial. Esto representa una disminución del 2% respecto a la <a href="https://sueldos.openqube.io/encuesta-sueldos-2025.01/" target="_blank" rel="noopener noreferrer">encuesta anterior</a>.</p>,
                            },
                        ],
                    },
                    {
                        title: '¿Qué porcentaje realiza guardias?',
                        data: [
                            { // tab
                                title: 'Guardias',
                                component: 'Pie',
                                props: {
                                    data: charts['guardias'].data.map(val => ({
                                        ...val,
                                        name: (val.name === 'No' ? 'Sin guardias' :
                                            val.name === 'Sí, pasiva' ? 'Guardias pasivas' :
                                                val.name === 'Sí, activa' ? 'Guardias activas' :
                                                    'Otro'),
                                    })),
                                    isPercentual: true,
                                },
                                caption: <p>Porcentaje de personas que realizan guardias y de qué tipo.</p>,
                                description: <p>Nótese que esta pregunta es opcional en la encuesta y sólo la respondió el {charts['porcentaje_respondio_guardias']}% de las personas.</p>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Distribución del top 10 mejor pago',
                        data: [
                            {  // tab
                                title: 'Actividad principal',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['salary_by_role_top10_perc'].data,
                                    isPercentual: false,
                                    isLogScale: false,
                                },
                                caption: 'Para este análisis nos quedamos con el top 10 de los salarios más altos. Esto responde la pregunta de ¿cuánto ganan los que más ganan por rol? Los valores de la mediana son expresados en Pesos Argentinos.',
                                description: 'Se abre por cada rol la cantidad de casos encontrados en la encuesta, tomando como mínimo 5, y mostrando el porcentaje de personas que tienen el sueldo dolarizado (% dolarizado en el grafico).'
                            },
                        ],
                    },

                ],
            },
            { // sub-category
                title: 'Compensación',
                data: [
                    {  // section
                        title: '¿Recibís algún tipo de bono?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['recibis_algun_tipo_de_bono'], isPercentual: true },
                                caption: <p>Porcentaje de participantes que han recibido o no, bonos como parte de la compensación. El <strong>
                                    {parseFloat(charts['recibe_algun_tipo_de_bono'].data.map(item => item.value) * 100).toFixed(0)}</strong>% de quienes respondieron la encuesta reciben algún tipo de bono</p>

                            },
                        ],
                    },
                    {  // section
                        title: '¿Tenés beneficios extra?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['beneficios_extra'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Aquí se enumera los beneficios más comunes entre los reportados.',
                                description: 'Los beneficios no son excluyentes, por lo que los valores indican qué porcentajes de participantes cuentan con los mismos.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Porcentajes de Ajuste por Inflación a la fecha (2025)',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['de_que_fue_el_ajuste'], isPercentual: true },
                                caption: <div>
                                    <p>Los rangos (eje vertical) representan el porcentaje de ajuste o aumento por inflación recibido en el año. La longitud de las barras representa el porcentaje de personas que recibieron ajustes dentro de ese rango.</p>
                                </div>,
                                description: (
                                    <div>
                                        Inflación acumulada en 2024: <strong>15%</strong>.
                                        <p>
                                            <small>
                                                Es importante tomar este número con ciudado, ya que en muchos casos no es posible distinguir si el sueldo está dolarizado o no y posiblemente existan
                                                casos donde, al tratarse de un sueldo dolarizado, no sufrió ajustes por inflación.
                                            </small>
                                        </p>
                                    </div>
                                )
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Características de las Empresas',
                data: [
                    {  // section
                        title: 'Cantidad de Personas',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['cantidad_de_personas_en_tu_organizacion'], isPercentual: true },
                                description: (
                                    <div>
                                        <p>
                                            Tamaño de las empresas donde trabajan las personas encuestadas.
                                        </p>
                                        <p>
                                            El {charts['porcentaje_menos_de_200_empelados']}% de las personas trabaja en empresas con menos de 200 empleados.
                                        </p>
                                    </div>
                                ),
                            },
                        ],
                    },
                    {  // section
                        title: 'Modalidad de trabajo',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: {
                                    data: charts['modalidad_trabajo'].data.map(val => ({
                                        ...val,
                                        name: (val.name === '100% remoto' ? 'Remoto' :
                                            val.name === '100% presencial' ? 'Presencial'
                                                : 'Híbrido'),
                                    })),
                                    isPercentual: true,

                                },
                                description: (
                                    <div>
                                        <p>
                                            El {charts["porcentaje_trabajo_remoto"]}% de las personas encuestadas trabaja remoto y el {charts["porcentaje_trabajo_hibrido"]}% trabaja bajo un esquema híbrido.
                                        </p>
                                    </div>
                                ),
                            },
                        ],
                    },
                    {  // section
                        title: '¿Cuánta gente recomienda su lugar de Trabajo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['la_recomendas_como_un_buen_lugar_para_trabajar'], isPercentual: true },
                                description: (<span>
                                    Datos porcentuales, por clase según indicador&nbsp;<a target='_blank' href='https://es.wikipedia.org/wiki/Net_Promoter_Score' rel="noopener noreferrer">Net Promoter Score</a>.
                                </span>),
                            },
                        ],
                    },
                    {  // section
                        title: '¿Cuántas personas están buscando un cambio laboral?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: {
                                    data: charts['busqueda_trabajo'].data.map(val => ({
                                        ...val,
                                        name: (val.name === 'No, estoy muy conforme.' ? 'No busca' :
                                            val.name === 'Sí, estoy buscando activamente.' ? 'En búsqueda activa'
                                                : 'Escuchando propuestas'),
                                    })),
                                    isPercentual: true,

                                },
                                description: (
                                    <div>
                                        <p>
                                            Sólo el {charts["porcentaje_muy_conforme"]}% de quienes respondieron la encuesta está muy conforme con su empleo y no busca un cambio.
                                            <br />
                                            El {charts["porcentaje_busqueda_activa"]}% se encuentra en búsqueda activa y el resto, abierto a escuchar ofertas.
                                        </p>
                                    </div>
                                ),
                            },
                        ],
                    },

                ],
            },
        ],
    },
    {
        title: 'Metodología',
        content: (
            <div>
                <p>
                    Para poder comprender mejor los resultados aquí expuestos, es importante hacer ciertas aclaraciones respecto del enfoque y la metodología utilizada.
                </p>

                <blockquote>- ¿Quieren decir que existe subjetividad en este reporte?</blockquote>
                <blockquote>- Así es.  Aunque hicimos todo lo posible para minimizarla.</blockquote>
                Si bien los resultados aquí expuestos son números, hay ciertos procedimientos manuales que ayudaron a seleccionarlos, agruparlos y haberles dado relevancia respecto de otros.  Más abajo mencionamos los más importantes:

                <h4>Representatividad de la muestra</h4>
                <p>
                    Para todos los segmentos sobre los cuales se ha hecho rankings de algún tipo (de salarios, conformidad, etc.), hemos tenido en cuenta principalmente el <strong>tamaño de la muestra</strong> por sobre otros factores.
                    Debido a la multidimensionalidad de los datos, no creímos conveniente utilizar la <i>homogeneidad</i> para determinar la representatividad, ya que por ejemplo, para una misma región la dispersión de salarios puede ser muy grande debido a otros factores tales como la antiguedad, el nivel de estudios o la tecnología.
                </p>

                <h4>Salarios</h4>
                <p>
                    Para los valores de los salarios aquí expuestos, ya sea por período, por género, experiencia, etc. utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Mediana_(estad%C3%ADstica)">mediana</a> del salario bruto.
                    Este valor, si bien se aproxima al promedio de una muestra, no es exactamente eso. La mediana salarial, nos sirve mejor para entender mejor cual es el valor típico de una muestra.
                </p>
                <p>
                    La mediana de los salarios, para los datos de la encuesta, suele estar levemente por debajo del valor promedio.
                </p>

                <h4>Evolución de los salarios en pesos constantes ajustados por IPC</h4>
                <p>
                    Los salarios históricos se ajustaron a pesos constantes utilizando el Índice de Precios al Consumidor (IPC) publicado por el INDEC, lo que permite eliminar el efecto de la inflación y analizar la evolución del poder adquisitivo real.
                    Para ello, se definió un período base y se aplicó el IPC como coeficiente de ajuste a cada salario histórico, convirtiéndolo a valores equivalentes en términos de precios actuales.
                    El detalle sobre cómo utilizar este índice se encuentra en <a target="_blank" rel="noopener noreferrer" href="https://www.indec.gob.ar/ftp/cuadros/economia/como_usar_indice_precios_2022.pdf">en este documento oficial de INDEC.</a>

                </p>
                <h5>Valores atípicos</h5>
                <p>
                    Muchos salarios ingresados no se corresponden necesariamente con datos reales.  Esto puede ser debido a errores de tipeo, no entendimiento de la pregunta, o simplemente intencionales.
                    Para evitar que estos valores distorsionen los resultados, aplicamos el método del <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Rango_intercuart%C3%ADlico">Rango Intercuartílico</a> con un coeficiente de <i>3.5</i>. Dadas las diferencias encontradas entre los salarios dolarizados y los no dolarizados, este método fue aplicado por separado para estas dos poblaciones.
                    Es muy posible que existan salarios reales que hayan quedado fuera del análisis, por ser estos realmente outliers.
                </p>
                <p>
                    Adicionalmente, y dado que el método anteriormente mencionado resulta en cotas inferiores negativas, para evitar distorsiones debido a valores demasiado bajos, hemos eliminado todas aquellas entradas cuyo salario sea menor a medio <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Anexo:Salario_m%C3%ADnimo_en_Argentina">salario mínimo</a>. Tanto para la más reciente encuesta como para las anteriores.
                </p>
                <h5>Medianas salariales no confiables</h5>
                <p>
                    Para evaluar la confiabilidad de las medianas salariales de cada grupo reportado, se calculó el <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Intervalo_de_confianza">Intervalo de Confianza</a> del 95% para la mediana y se consideró confiable si dicho intervalo no supera el 50% de la mediana.
                </p>
                <p>
                    Por ejemplo, una mediana de 1.200.000 con un intervalo de confianza del 95% entre 1.000.000 y 1.400.000 se considera confiable, ya que el ancho del intervalo (400.000) representa solo un 33% de la mediana. En cambio, si el intervalo de confianza estuviera entre 850.000 y 1.550.000, la consideraríamos no confiable, ya que el ancho del intervalo representa un 58% de la mediana.
                </p>
                <h5>Cotización del dólar</h5>
                <p>
                    Para el cálculo de salarios dolarizados, tomamos la cotización intradiaria promedio de Bloomberg y tomamos la mediana del valor del día de publicación con un delta de 5 días. En el caso del dólar MEP, la cotización proviene de la serie histórica publicada por Ámbito Financiero.
                </p>
                <h4>Experiencia</h4>
                <p>Para los gráficos en los cuales mencionamos experiencia o seniority, hemos agrupado los datos relevados en tres grandes grupos: </p>
                <ol>
                    <li><strong>Junior</strong>: de 0 hasta 2 años.</li>
                    <li><strong>Semi-Senior</strong>: de 2 años inclusive hasta 5 años.</li>
                    <li><strong>Senior</strong>: desde 5 años inclusive.</li>
                </ol>
                <p>Si bien esta forma de agrupar puede ser discutible, ayuda mucho a la hora de visualizar los datos y reducir la dimensionalidad.</p>
                <h4>Normalización de entradas de texto libre</h4>
                <p>
                    En la encuesta algunos campos tales como <i>nombre de la carrera universitaria</i>, <i>nombre de la Universidad</i> y <i>rol</i>, además de presentar opciones predefinidas, también permiten texto libre (otros).
                    Esto conlleva a una mayor dispersión de valores, dado que cada participante contesta de maneras distintas:
                </p>
                <ul>
                    <li>en mayúsculas</li>
                    <li>en minúsculas</li>
                    <li>con abreviaciones</li>
                    <li>sin abreviaciones</li>
                    <li>con errores de ortografía</li>
                    <li>sin errores de ortografía</li>
                    <li>con increíbles errores de ortografía</li>
                    <li>todas las combinaciones posibles de las anteriores</li>
                    <li>etc.</li>
                </ul>
                <p>
                    De existir amplia dispersión, es impracticable poder obtener por ejemplo, una noción del salario típico de un Analista Programador que no completó sus estudios.
                </p>
                <p>
                    Para abordar este problema, quienes preparamos este informe escribimos una serie de reglas basadas en <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Expresión_regular">expresiones regulares</a> para normalizar los valores y también reducir la dimensionalidad.
                </p>
                <h5>Género</h5>
                <p>Las respuestas al campo de género solían presentar varias irregularidades ya que en todas las ediciones las personas encuestadas tenían la posibilidad de escribir texto libre, y muchas solían hacerlo en tono gracioso o enojado. Todas estas respuestas eran agrupadas en la categoría "Prefiero no decir". Entonces, esa categoría no solo representaba a las personas que explícitamente decían no querer expresar su género, sino también a aquellas que completaron cosas sin sentido.</p>
                <p>Este último grupo tendía a aumentar cuando se ofrecían todas las opciones de diversidad de género (con la posibilidad de también escribir texto libre). El nuevo formato de esta pregunta (solo texto libre), produjo un marcado descenso en este tipo de respuestas, ayudándonos a tener una mejor aproximación al número de personas que prefieren no identificarse.</p>
                <h4>Series temporales</h4>
                <h5>Salarios</h5>
                <p>
                    Para los valores presentados de Progresión Histórica, tanto en el apartado de <a href="#Salarios-Progresion-historica">Salarios</a> como de <a href="#Genero-Progresion-historica">Género</a>,
                    también hemos aplicado reglas de normalización de valores y remoción de valores atípicos.
                </p>
                <p>
                    Por ejemplo, para los datasets de entre <i>2016</i> a <i>2018</i>, los salarios podrían estar dados en valores brutos o netos según cada respuesta.
                    En ese caso, lo que se hizo fue convertir los valores netos a brutos, sumándoles el procentaje correspondiente a las cargas sociales.
                    Por supuesto que existe cierto grado de error, puesto que no consideramos el distorsivo Impuesto a las Ganancias, ya que sería impracticable dado la complijidad de su cálculo y la falta de información sobre posibles deducciones.
                </p>
                <h4>Representaciones Gráficas</h4>
                <h5>Escalas</h5>
                <p>
                    Para visualizaciones en las cuales el espectro de valores es demasiado amplio, y a veces distante entre valores de una misma muestra, utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Escala_logar%C3%ADtmica">escala logarítmica</a>.
                    Este recurso nos permite apreciar los datos de una manera más clara, por ejemplo cuando existen valores cercanos a cero y otros de uno o más órdenes de magnitud.
                </p>
                <h5>Datos insuficientes</h5>
                <p>
                    En muchas ocasiones, dado el nivel granularidad de ciertos gráficos, la cantidad escasa de datapoints en algunos segmentos, pueden inducir a conclusiones erróneas.
                    Para advertir al lector de estos casos, hemos grisado en todos los gráficos posibles aquellos segmentos cuya representatividad no supere el umbral de 0,5%, tanto gráficos de barras horizontales como series históricas.
                </p>
                <h4>Repositorios</h4>

                <a target="_blank" rel="noopener noreferrer" href="https://github.com/openqube/openqube-sueldos">Acá encontraran toda la información para recrear los análisis, los google colab de Python utilizados, y los datos tanto los originales como los limpios para que puedan replicar y realizar nuevos análisis.</a>


                <h4>Análisis previos</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.01">Resultados de la encuesta de sueldos 2019.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.02">Resultados de la encuesta de sueldos 2019.02</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2020.01">Resultados de la encuesta de sueldos 2020.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2020.02">Resultados de la encuesta de sueldos 2020.02</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2021.01/">Resultados de la encuesta de sueldos 2021.01</a></li>
                    <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2021.02/" target="_blank" rel="noopener noreferrer">Resultados de la encuesta de sueldos 2021.02 </a></li>
                    <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2022.01/" target="_blank" rel="noopener noreferrer">Resultados de la encuesta de sueldos 2022.01 </a></li>
                    <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2023.01/" target="_blank" rel="noopener noreferrer">Resultados de la encuesta de sueldos 2023.01 </a></li>
                    <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2023.02/" target="_blank" rel="noopener noreferrer">Resultados de la encuesta de sueldos 2023.02 </a></li>
                    <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2024.01/" target="_blank" rel="noopener noreferrer">Resultados de la encuesta de sueldos 2024.01 </a></li>
                    <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2025.01/" target="_blank" rel="noopener noreferrer">Resultados de la encuesta de sueldos 2025.01 </a></li>
                </ul>
            </div>
        )
    }
];

