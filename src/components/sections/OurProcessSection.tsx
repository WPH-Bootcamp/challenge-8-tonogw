import { services } from "../../data/services";
import { ServicesHeader } from "../../data/services";
import { ServiceItem } from "../../types";

export default function OurProcessSection {

    return (

        // CONTAINER OUR PROCESS
        <section className="font-display bg-white dark:bg-black">
            <div
            {services.map((services: ServiceItem) => (

                

        
            )
            
        )
        
        }
            >
                <div key={services.id} >

                </div>

            </div>

        </section>

    )
}

