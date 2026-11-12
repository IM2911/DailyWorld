
Estamos trabajando en DailyWorld, una web desarrollada con Next.js 16.4.5, App Router y TypeScript.

Quiero implementar las funcionalidades pendientes antes de publicar la web.

IMPORTANTE:
- El diseño actual está terminado y aprobado.
- NO rediseñes la web.
- NO modifiques colores, tipografías, animaciones, espaciados ni componentes existentes salvo que sea estrictamente necesario.
- Mantén el estilo visual actual en todas las páginas nuevas.
- Reutiliza el Header, Footer y componentes existentes.
- Antes de modificar nada, inspecciona la estructura real del proyecto.

TAREAS:

1. FAVICON Y SEO
- Comprueba la configuración actual de favicon y metadata.
- Configura favicon.ico, icon.png y apple-icon.png si disponemos de los recursos necesarios.
- No inventes un logotipo.
- Comprueba metadata, title, description, canonical y Open Graph.
- Asegúrate de que Google pueda acceder a los iconos.
- No dupliques configuraciones existentes.

2. PRIVACY POLICY
Crea /privacy-policy.
Diseña una página profesional y coherente con DailyWorld.
Incluye estructura para:
- Información recopilada.
- Finalidad del tratamiento.
- Cookies y tecnologías similares.
- Google Analytics, si está instalado.
- Google AdSense, cuando se integre.
- Derechos de los usuarios.
- Conservación y protección de datos.
- Contacto.

No inventes datos del propietario, domicilio, empresa ni tratamientos que no estén confirmados. Señala claramente los datos pendientes de completar.

3. TERMS OF USE
Crea /terms-of-use.
Incluye:
- Condiciones de utilización.
- Uso de calculadoras y herramientas.
- Exactitud y limitaciones de los resultados.
- Propiedad intelectual.
- Responsabilidad.
- Usos prohibidos.
- Modificaciones de las condiciones.

4. COOKIE POLICY Y CONSENTIMIENTO
Crea /cookie-policy.
Explica los tipos de cookies, finalidades, duración y terceros cuando estén identificados.
Inspecciona qué cookies y scripts utiliza actualmente el proyecto.
No inventes cookies.
Prepara la integración de una CMP certificada por Google y compatible con IAB TCF para AdSense y usuarios europeos.
No cargues publicidad, analítica ni cookies no esenciales antes del consentimiento cuando este sea necesario.
Permite modificar las preferencias desde el Footer.
No implementes un banner ficticio que simplemente guarde un booleano y lo presente como cumplimiento legal.

5. CONTACT US
Inspecciona la página /contact existente.
Mantén su diseño.
Prepara un formulario con:
- Name.
- Email.
- Reason: Suggestion, Complaint, Bug Report, Other.
- Message.
- Send Message.

Prepara la integración de Resend mediante una API Route segura.
Utiliza variables de entorno para las credenciales.
Valida los campos en servidor, añade protección contra spam y no expongas claves API.
Deja la dirección de destino como variable configurable hasta que proporcione mi correo definitivo.
Si Resend no está configurado, informa claramente de ello; no simules que los mensajes se han enviado.

6. FOOTER Y NAVEGACIÓN
Comprueba que todos los enlaces funcionen:
- Privacy Policy.
- Terms of Use.
- Cookie Policy.
- Contact Us.

7. VERIFICACIÓN
- Comprueba todas las rutas.
- Ejecuta npm run build.
- Corrige los errores que aparezcan.
- Comprueba que el diseño responsive sigue funcionando.
- No elimines ninguna funcionalidad existente.

Al terminar, explícame:
1. Archivos creados y modificados.
2. Variables de entorno que debo configurar.
3. Servicios externos que debo registrar.
4. Qué datos necesitas que te proporcione.
5. Qué pasos quedan para publicar.

Trabaja sobre el proyecto existente, no crees otro proyecto.

### STRICT ZERO-COST REQUIREMENT

DailyWorld must operate with a total budget of €0.
- Never introduce paid subscriptions, APIs, hosting, databases or third-party services.
- Use free tiers only, with no automatic billing or paid overages.
- All services must explicitly permit commercial use and future Google AdSense monetization.
- If a free service prohibits commercial use, do not use it.
- Prefer self-hosted or built-in Next.js functionality when possible.
- Resend must remain on its free plan, respecting its sending limits.
- Do not purchase a domain yet; use a free hosting subdomain.
- Never activate paid features without my explicit approval.
- If a feature cannot be implemented reliably for €0, explain the limitation and propose a genuinely free alternative.