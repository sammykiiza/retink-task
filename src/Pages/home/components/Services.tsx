import React from 'react'
import { artificialIntelligence, directCustomer, group, informed, publishMonitor } from '../../../assets'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <div className='flex flex-col items-center space-y-10'>
            <div className='flex space-x-10'>
                <ServiceCard
                    image={artificialIntelligence}
                    title1={'MakeAI-assisted'}
                    title2={'Content Choices'}
                    content={'Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.'}
                />

                <ServiceCard
                    image={group}
                    title1={'Upload and Maintain'}
                    title2={'your Brand Identity'}
                    content={'Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!'}
                />

                <ServiceCard
                    image={informed}
                    title1={'Be informed as we create'}
                    content={'Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.'}
                />
            </div>
            <div className='flex space-x-10'>
                <ServiceCard
                    image={directCustomer}
                    title1={'Receive and Review'}
                    content={'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'}
                />

                <ServiceCard
                    image={publishMonitor}
                    title1={'Publish and Monitor'}
                    title2={'your contents\' progress'}
                    content={'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'}
                />
            </div>
        </div>
    )
}

export default Services