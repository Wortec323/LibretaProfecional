// src/app/questions.ts
import { Question } from './question.model'; // Ajusta la ruta si es necesario

export const QUESTIONS: Question[] = [
        {
          questionText: '¿Cuál es el límite de velocidad en zonas urbanas en Uruguay?',
          imageUrl: 'assets/images/speed_limit.jpg',
          options: ['40 km/h', '60 km/h', '80 km/h', '100 km/h'],
          correctAnswer: '60 km/h'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con un triángulo rojo?',
          imageUrl: 'assets/images/yield_sign.jpg',
          options: ['Alto', 'Ceda el paso', 'Prohibido el paso', 'Precaución'],
          correctAnswer: 'Ceda el paso'
        },
        {
          questionText: '¿Qué acción debe tomar cuando una señal de tránsito indica "prohibido girar a la izquierda"?',
          imageUrl: 'assets/images/no_left_turn.jpg',
          options: ['Girará a la derecha', 'Seguirá recto', 'Girar a la izquierda está permitido', 'Detendrá el vehículo'],
          correctAnswer: 'Seguirá recto'
        },
        {
          questionText: '¿Cuál es la distancia mínima que debe mantenerse al estacionar cerca de un cruce de peatones?',
          imageUrl: 'assets/images/parking_distance.jpg',
          options: ['5 metros', '10 metros', '15 metros', '20 metros'],
          correctAnswer: '5 metros'
        },
        {
          questionText: '¿Qué debe hacer si encuentra un semáforo en rojo?',
          imageUrl: 'assets/images/red_traffic_light.jpg',
          options: ['Detenerse completamente', 'Reducir la velocidad y continuar', 'Esperar en la intersección', 'Pasar con precaución'],
          correctAnswer: 'Detenerse completamente'
        },
        {
          questionText: '¿Qué indica una señal de tránsito con una imagen de un auto y una llanta en rojo?',
          imageUrl: 'assets/images/slippery_road.jpg',
          options: ['Carretera en mal estado', 'Carretera resbaladiza', 'Zona de construcción', 'Prohibido estacionar'],
          correctAnswer: 'Carretera resbaladiza'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con una imagen de un tren y una línea roja?',
          imageUrl: 'assets/images/railroad_crossing.jpg',
          options: ['Cruce de ferrocarril', 'Zona de peaje', 'Zona de velocidad reducida', 'Prohibido el paso'],
          correctAnswer: 'Cruce de ferrocarril'
        },
        {
          questionText: '¿Cuál es el significado de una señal de tránsito que muestra un círculo con una línea diagonal roja?',
          imageUrl: 'assets/images/no_entry.jpg',
          options: ['Prohibido el paso', 'Prohibido estacionar', 'Ceda el paso', 'Velocidad máxima permitida'],
          correctAnswer: 'Prohibido el paso'
        },
        {
          questionText: '¿Qué debe hacer si se aproxima a una señal de "STOP"?',
          imageUrl: 'assets/images/stop_sign.jpg',
          options: ['Detenerse y luego continuar con precaución', 'Disminuir la velocidad', 'Seguir sin detenerse', 'Aumentar la velocidad'],
          correctAnswer: 'Detenerse y luego continuar con precaución'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con un círculo azul?',
          imageUrl: 'assets/images/mandatory_direction.jpg',
          options: ['Obligación', 'Prohibido', 'Advertencia', 'Información'],
          correctAnswer: 'Obligación'
        },
        {
          questionText: '¿Cuándo se debe usar el cinturón de seguridad?',
          imageUrl: 'assets/images/seat_belt.jpg',
          options: ['Siempre que se conduzca', 'Solo en carreteras', 'Solo en la ciudad', 'Solo cuando lleve pasajeros'],
          correctAnswer: 'Siempre que se conduzca'
        },
        {
          questionText: '¿Cuál es el límite de alcohol permitido en sangre para conductores profesionales?',
          imageUrl: 'assets/images/alcohol_limit.jpg',
          options: ['0.5 g/l', '0.8 g/l', '1.0 g/l', '0.3 g/l'],
          correctAnswer: '0.3 g/l'
        },
        {
          questionText: '¿Qué indica una señal de tránsito con un hombre en una imagen?',
          imageUrl: 'assets/images/pedestrian_crossing.jpg',
          options: ['Zona escolar', 'Cruce de peatones', 'Zona de construcción', 'Estacionamiento'],
          correctAnswer: 'Cruce de peatones'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con un coche y una curva?',
          imageUrl: 'assets/images/sharp_curve.jpg',
          options: ['Curva peligrosa', 'Zona de desvío', 'Zona de velocidad reducida', 'Cruce de caminos'],
          correctAnswer: 'Curva peligrosa'
        },
        {
          questionText: '¿Cómo debe proceder si encuentra una señal de "ceda el paso" en una intersección?',
          imageUrl: 'assets/images/yield_sign.jpg',
          options: ['Detenerse y esperar', 'Reducir la velocidad y continuar', 'Aumentar la velocidad', 'Seguir sin detenerse'],
          correctAnswer: 'Reducir la velocidad y continuar'
        },
        {
          questionText: '¿Qué debe hacer si un vehículo de emergencia con luces encendidas se aproxima?',
          imageUrl: 'assets/images/emergency_vehicle.jpg',
          options: ['Detenerse y permitirle el paso', 'Aumentar la velocidad para alejarse', 'Seguir en la misma dirección', 'Reducir la velocidad y cambiar de carril'],
          correctAnswer: 'Detenerse y permitirle el paso'
        },
        {
          questionText: '¿Cuál es la señal que indica un cruce de animales?',
          imageUrl: 'assets/images/animal_crossing.jpg',
          options: ['Señal de advertencia', 'Señal de información', 'Señal de obligación', 'Señal de prohibición'],
          correctAnswer: 'Señal de advertencia'
        },
        {
          questionText: '¿Qué hacer si se encuentra con una señal de "prohibido estacionar"?',
          imageUrl: 'assets/images/no_parking.jpg',
          options: ['Buscar otro lugar para estacionar', 'Estacionar rápidamente', 'Dejar el vehículo y continuar a pie', 'No hacer caso a la señal'],
          correctAnswer: 'Buscar otro lugar para estacionar'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con una imagen de una flecha blanca y negra?',
          imageUrl: 'assets/images/one_way.jpg',
          options: ['Vía de sentido único', 'Vía de doble sentido', 'Prohibido el paso', 'Ceda el paso'],
          correctAnswer: 'Vía de sentido único'
        },
        {
          questionText: '¿Cuál es el límite de velocidad en zonas escolares?',
          imageUrl: 'assets/images/school_zone.jpg',
          options: ['20 km/h', '30 km/h', '40 km/h', '50 km/h'],
          correctAnswer: '30 km/h'
        },
        {
          questionText: '¿Qué debe hacer si se aproxima a una señal de "cierre de carretera"?',
          imageUrl: 'assets/images/road_closure.jpg',
          options: ['Buscar una ruta alternativa', 'Continuar y seguir las señales', 'Esperar a que se abra la carretera', 'Aumentar la velocidad para pasar rápido'],
          correctAnswer: 'Buscar una ruta alternativa'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con una figura de un ciclista?',
          imageUrl: 'assets/images/bicycle_path.jpg',
          options: ['Carril para bicicletas', 'Zona de estacionamiento', 'Zona de peaje', 'Zona de velocidad reducida'],
          correctAnswer: 'Carril para bicicletas'
        },
        {
          questionText: '¿Cómo debe proceder cuando vea una señal de "curva peligrosa a la izquierda"?',
          imageUrl: 'assets/images/left_curve.jpg',
          options: ['Reducir la velocidad y girar con precaución', 'Aumentar la velocidad y tomar la curva rápidamente', 'Mantener la velocidad y tomar la curva', 'Detenerse antes de la curva'],
          correctAnswer: 'Reducir la velocidad y girar con precaución'
        },
        {
          questionText: '¿Qué hacer si un vehículo está bloqueando su salida en un estacionamiento?',
          imageUrl: 'assets/images/blocking_vehicle.jpg',
          options: ['Esperar a que el vehículo se mueva', 'Tocar la bocina continuamente', 'Intentar salir de todas formas', 'Buscar ayuda de seguridad'],
          correctAnswer: 'Esperar a que el vehículo se mueva'
        },
        {
          questionText: '¿Qué indica una señal de tránsito con un círculo rojo y una barra diagonal?',
          imageUrl: 'assets/images/no_entry.jpg',
          options: ['Prohibido el paso', 'Ceda el paso', 'Zona de velocidad reducida', 'Estacionamiento permitido'],
          correctAnswer: 'Prohibido el paso'
        },
        {
          questionText: '¿Cuál es el procedimiento correcto al girar a la derecha en una intersección?',
          imageUrl: 'assets/images/right_turn.jpg',
          options: ['Señalizar con el intermitente derecho y ceder el paso a los peatones', 'Girar sin señalizar y acelerar', 'Detenerse completamente antes de girar', 'Girar sin ceder el paso'],
          correctAnswer: 'Señalizar con el intermitente derecho y ceder el paso a los peatones'
        },
        {
          questionText: '¿Qué hacer si encuentra una señal de "zona de construcción"?',
          imageUrl: 'assets/images/construction_zone.jpg',
          options: ['Reducir la velocidad y seguir las señales', 'Aumentar la velocidad para salir rápido', 'Detenerse hasta que se despeje la zona', 'Ignorar la señal y seguir adelante'],
          correctAnswer: 'Reducir la velocidad y seguir las señales'
        },
        {
          questionText: '¿Qué indica una señal de tránsito con un círculo azul y una flecha blanca?',
          imageUrl: 'assets/images/mandatory_direction.jpg',
          options: ['Dirección obligatoria', 'Zona de estacionamiento', 'Zona de velocidad reducida', 'Cruce de caminos'],
          correctAnswer: 'Dirección obligatoria'
        },
        {
          questionText: '¿Cómo debe actuar si su vehículo comienza a patinar?',
          imageUrl: 'assets/images/skid_control.jpg',
          options: ['Sujetar firmemente el volante y reducir la velocidad suavemente', 'Girar el volante bruscamente para controlar el patinaje', 'Aumentar la velocidad para recuperar el control', 'Frenar rápidamente para detener el vehículo'],
          correctAnswer: 'Sujetar firmemente el volante y reducir la velocidad suavemente'
        },
        {
          questionText: '¿Qué hacer si la visibilidad es reducida debido a la niebla?',
          imageUrl: 'assets/images/foggy_road.jpg',
          options: ['Encender las luces antiniebla y reducir la velocidad', 'Mantener las luces altas y seguir a la misma velocidad', 'Aumentar la velocidad para salir de la niebla rápidamente', 'Encender las luces de emergencia y detenerse'],
          correctAnswer: 'Encender las luces antiniebla y reducir la velocidad'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con una figura de una mano levantada?',
          imageUrl: 'assets/images/stop_signal.jpg',
          options: ['Señal de alto', 'Zona de cruce de peatones', 'Zona de estacionamiento', 'Advertencia de peligro'],
          correctAnswer: 'Señal de alto'
        },
        {
          questionText: '¿Cuál es la señal que indica un límite de velocidad?',
          imageUrl: 'assets/images/speed_limit.jpg',
          options: ['Una señal rectangular con números', 'Una señal triangular con números', 'Una señal circular con números', 'Una señal cuadrada con números'],
          correctAnswer: 'Una señal circular con números'
        },
        {
          questionText: '¿Qué debe hacer si se encuentra con una señal de "zona de peaje"?',
          imageUrl: 'assets/images/toll_zone.jpg',
          options: ['Prepararse para pagar el peaje', 'Aumentar la velocidad para evitar el peaje', 'Buscar una ruta alternativa', 'Detenerse hasta que se abra la barrera'],
          correctAnswer: 'Prepararse para pagar el peaje'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con un triángulo amarillo y negro?',
          imageUrl: 'assets/images/caution_sign.jpg',
          options: ['Advertencia de peligro', 'Prohibido el paso', 'Obligación de detenerse', 'Zona de construcción'],
          correctAnswer: 'Advertencia de peligro'
        },
        {
          questionText: '¿Qué hacer si la carretera está cubierta de hielo?',
          imageUrl: 'assets/images/icy_road.jpg',
          options: ['Reducir la velocidad y conducir con cuidado', 'Aumentar la velocidad para evitar el hielo', 'Conducir normalmente y evitar movimientos bruscos', 'Detenerse y esperar a que el hielo se derrita'],
          correctAnswer: 'Reducir la velocidad y conducir con cuidado'
        },
        {
          questionText: '¿Cuál es la señal que indica un cruce de peatones?',
          imageUrl: 'assets/images/pedestrian_crossing.jpg',
          options: ['Una señal rectangular azul', 'Una señal triangular con un hombre caminando', 'Una señal circular con una figura de peatón', 'Una señal cuadrada con una flecha'],
          correctAnswer: 'Una señal triangular con un hombre caminando'
        },
        {
          questionText: '¿Qué hacer si se encuentra con una señal de "cuidado con el tráfico"?',
          imageUrl: 'assets/images/traffic_caution.jpg',
          options: ['Reducir la velocidad y estar atento', 'Aumentar la velocidad para pasar rápido', 'Detenerse y esperar a que el tráfico se despeje', 'Seguir en la misma dirección sin cambios'],
          correctAnswer: 'Reducir la velocidad y estar atento'
        },
        {
          questionText: '¿Cómo debe actuar si se aproxima a una señal de "prohibido adelantar"?',
          imageUrl: 'assets/images/no_overtaking.jpg',
          options: ['No adelantar a otros vehículos', 'Adelantar con precaución', 'Reducir la velocidad antes de adelantar', 'Aumentar la velocidad para adelantar rápidamente'],
          correctAnswer: 'No adelantar a otros vehículos'
        },
        {
          questionText: '¿Cuál es la señal que indica una zona de estacionamiento permitido?',
          imageUrl: 'assets/images/parking_allowed.jpg',
          options: ['Una señal circular con una P', 'Una señal rectangular con un coche', 'Una señal triangular con una P', 'Una señal cuadrada con un coche'],
          correctAnswer: 'Una señal circular con una P'
        },
        {
          questionText: '¿Qué debe hacer si se encuentra con una señal de "zona de peligro"?',
          imageUrl: 'assets/images/danger_zone.jpg',
          options: ['Reducir la velocidad y estar alerta', 'Continuar a la misma velocidad', 'Aumentar la velocidad para salir rápido', 'Detenerse hasta que se despeje el peligro'],
          correctAnswer: 'Reducir la velocidad y estar alerta'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con una figura de una mano con la palma abierta?',
          imageUrl: 'assets/images/stop_hand.jpg',
          options: ['Señal de alto', 'Zona de cruce de peatones', 'Zona de estacionamiento', 'Advertencia de peligro'],
          correctAnswer: 'Señal de alto'
        },
        {
          questionText: '¿Qué hacer si encuentra una señal de "no girar a la derecha"?',
          imageUrl: 'assets/images/no_right_turn.jpg',
          options: ['Buscar una ruta alternativa', 'Girar a la derecha con precaución', 'Detenerse y esperar', 'Girar a la izquierda'],
          correctAnswer: 'Buscar una ruta alternativa'
        },
        {
          questionText: '¿Qué significa una señal de tránsito con una imagen de un camión?',
          imageUrl: 'assets/images/truck_restriction.jpg',
          options: ['Restricción para camiones', 'Zona de carga y descarga', 'Zona de estacionamiento para camiones', 'Zona de peaje para camiones'],
          correctAnswer: 'Restricción para camiones'
        }
      
];
