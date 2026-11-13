import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms for using DailyWorld and its electricity cost calculators, including the accuracy and limits of calculator results.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-50">Términos de uso</h1>
      <section className="prose">
        <p>
          Bienvenido a DailyWorld. Al acceder o utilizar nuestro sitio web
          (el &ldquo;Sitio&rdquo;), usted acepta estos Términos de Uso y
          acepta cumplir con ellos. Si no está de acuerdo con alguna parte de
          los Términos, no puede utilizar nuestro Sitio.
        </p>

        <h2>1. Aceptación de los Términos</h2>
        <p>
          El uso de nuestro Sitio constituye la aceptación de estos Términos y
          de cualquier otra política que pueda aparecer (p.ej. Políticas de
          privacidad, Normas de la comunidad, Política de cookies). Si alguna
          disposición es inválida, esa disposición será reemplazada por una
          interpretación que logre su propósito legal.
        </p>

        <h2>2. Uso del Sitio</h2>
        <ul>
          <li>
            Debe tener al menos 13 años de edad para utilizar este Sitio. Al
            registrarse, usted es responsable de mantener la confidencialidad de
            su cuenta y contraseña, si aplica.
          </li>
          <li>
            Usted puede utilizar el Sitio solo para fines legales, según lo
            permiten estos Términos. Debe abstenerse de usar el Sitio de
            cualquier forma que infrinja cualquier ley aplicable o las
            regulaciones.
          </li>
        </ul>

        <h2>3. Exactitud y limitación de resultados</h2>
        <p>
          Los calculadores de DailyWorld son herramientas que brindan
          estimaciones generales con fines informativos únicamente. Nuestros
          resultados de cálculos son solo aproximaciones basadas en supuestos
          y datos proporcionados por usted y por el servicio de electricidad
          local. La exactitud de cualquier cálculo depende de la exactitud de
          los datos ingresados. DailyWorld no garantiza la exactitud, integridad
          o utilidad de ningún cálculo, y no puede ser responsabilizado por
          ninguna decisión basada en la información proporcionada por este
          sitio.
        </p>
        <p>
          Usted comprende y acepta que los calculadores son herramientas de
          estimación, no un sustituto para consejo profesional (p.ej.
          asesoramiento financiero, fiscal, legal o de ingeniería) y que los
          resultados pueden no ser totalmente exactos.
        </p>
        <p>
          Usted acepta no responsabilizar a DailyWorld por cualquier decisión
          basada en los resultados de los calculadores.
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          El contenido disponible en nuestro Sitio es propiedad de DailyWorld
          o nuestros licenciatarios, y está protegido por leyes de propiedad
          intelectual (incluidas las leyes de derechos de autor y marcas
          registradas) y tratados. Reservamos todos los derechos no
          expresamente concedidos en estos Términos.
        </p>

        <h2>5. Responsabilidad</h2>
        <p>
          DailyWorld no es responsable por el contenido de sitios web enlazados.
          Estos Sitios Enlazados son proporcionados solo como un servicio a
          nuestros visitantes. Su uso de esos sitios web enlazados está sujeto
          a los términos de uso que establecen esos sitios. Además, DailyWorld
          no es responsable por los daños causados por el acceso de terceros a
          sus cuentas.
        </p>

        <h2>6. Usos prohibidos</h2>
        <p>
          Sin autorización previa por escrito, no puede:
        </p>
        <ul>
          <li>
            Vender, alquilar, arrendar, transferir, explotar comercialmente o
            distribuir cualquier parte del Sitio.
          </li>
          <li>
            Modificar, crear trabajos derivados, desensamblar, descompilar, o
            intentar obtener el código fuente del Sitio.
          </li>
        </ul>

        <h2>7. Modificaciones de los Términos</h2>
        <p>
          Nos reservamos el derecho, a nuestro exclusivo criterio, de
          actualizar o modificar estos Términos en cualquier momento. Le
          notificaremos mediante la publicación de los nuevos Términos en el
          Sitio. Su uso continuo de nuestro Sitio después de la publicación de
          cualquier modificación constituye la aceptación de dicha
          modificación.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Si usted tiene alguna pregunta sobre estos Términos, por favor
          utilice el formulario de{" "}
          <a href="/contact" className="text-brand-600 underline">
            Contacto
          </a>{" "}
          para comunicarse con nosotros.
        </p>
      </section>
    </div>
  );
}