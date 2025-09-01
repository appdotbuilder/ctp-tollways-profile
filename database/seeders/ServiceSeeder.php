<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Toll Road Construction',
                'slug' => 'toll-road-construction',
                'description' => 'Complete toll road construction services from planning to completion, including highway design, bridge construction, and infrastructure development.',
                'content' => '<h2>Toll Road Construction</h2><p>Our comprehensive toll road construction services encompass every aspect of highway development, from initial planning and design to final completion and handover. We specialize in building high-quality, durable toll roads that meet international standards and serve communities for decades.</p><h3>Our Construction Services Include:</h3><ul><li>Highway and road construction</li><li>Bridge and overpass construction</li><li>Tunnel excavation and construction</li><li>Drainage and water management systems</li><li>Traffic management infrastructure</li><li>Toll collection system installation</li></ul><h3>Advanced Construction Techniques</h3><p>We utilize state-of-the-art construction equipment and techniques to ensure efficient project delivery:</p><ul><li>Modern earthmoving and grading equipment</li><li>Advanced asphalt paving technology</li><li>Precision surveying and GPS systems</li><li>Quality control testing laboratories</li><li>Environmental monitoring systems</li></ul><h3>Project Management Excellence</h3><p>Our experienced project management teams ensure that every construction project is delivered on time, within budget, and to the highest quality standards. We maintain strict adherence to safety protocols and environmental regulations throughout the construction process.</p>',
                'icon' => 'road',
                'is_published' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Infrastructure Planning & Design',
                'slug' => 'infrastructure-planning-design',
                'description' => 'Expert planning and design services for toll road infrastructure projects, including feasibility studies, engineering design, and environmental impact assessments.',
                'content' => '<h2>Infrastructure Planning & Design</h2><p>Our planning and design services form the foundation of successful toll road projects. We provide comprehensive planning solutions that consider technical feasibility, environmental impact, and economic viability to ensure optimal project outcomes.</p><h3>Planning Services</h3><ul><li>Feasibility studies and route analysis</li><li>Traffic demand forecasting</li><li>Environmental impact assessments</li><li>Land acquisition planning</li><li>Financial modeling and analysis</li><li>Stakeholder consultation and engagement</li></ul><h3>Design Excellence</h3><p>Our team of experienced engineers and designers create innovative solutions that meet the unique challenges of each project:</p><ul><li>Highway geometric design</li><li>Structural engineering for bridges and overpasses</li><li>Drainage and stormwater management design</li><li>Traffic management system design</li><li>Landscaping and aesthetic design</li><li>Toll collection system planning</li></ul><h3>Technology Integration</h3><p>We leverage cutting-edge technology in our planning and design processes:</p><ul><li>3D modeling and visualization</li><li>Computer-aided design (CAD) systems</li><li>Geographic Information Systems (GIS)</li><li>Traffic simulation software</li><li>Environmental monitoring tools</li></ul>',
                'icon' => 'blueprint',
                'is_published' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Project Management & Supervision',
                'slug' => 'project-management-supervision',
                'description' => 'Professional project management and supervision services ensuring timely delivery, quality control, and budget management for toll road projects.',
                'content' => '<h2>Project Management & Supervision</h2><p>Effective project management is crucial for the successful delivery of complex toll road infrastructure projects. Our experienced project management teams provide comprehensive oversight and supervision to ensure projects are completed on time, within budget, and to the highest quality standards.</p><h3>Project Management Services</h3><ul><li>Project planning and scheduling</li><li>Resource allocation and management</li><li>Budget control and cost management</li><li>Risk assessment and mitigation</li><li>Quality assurance and control</li><li>Stakeholder communication and reporting</li></ul><h3>Construction Supervision</h3><p>Our supervision services ensure that construction activities are carried out according to specifications and industry best practices:</p><ul><li>Daily construction monitoring and inspection</li><li>Material testing and quality verification</li><li>Safety compliance oversight</li><li>Environmental monitoring and compliance</li><li>Progress reporting and documentation</li><li>Change order management</li></ul><h3>Technology-Enabled Management</h3><p>We utilize advanced project management tools and technologies:</p><ul><li>Project management software systems</li><li>Digital progress tracking and reporting</li><li>Mobile inspection and documentation tools</li><li>Real-time communication systems</li><li>Document management and control systems</li></ul>',
                'icon' => 'management',
                'is_published' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Maintenance & Operations',
                'slug' => 'maintenance-operations',
                'description' => 'Comprehensive maintenance and operational services for toll roads, including routine maintenance, emergency repairs, and toll collection system management.',
                'content' => '<h2>Maintenance & Operations</h2><p>Our maintenance and operations services ensure that toll roads continue to provide safe, efficient transportation long after construction is complete. We provide comprehensive maintenance programs that maximize road lifespan and minimize disruption to traffic.</p><h3>Maintenance Services</h3><ul><li>Preventive maintenance planning and execution</li><li>Pavement rehabilitation and resurfacing</li><li>Bridge inspection and maintenance</li><li>Drainage system maintenance</li><li>Traffic signal and lighting maintenance</li><li>Emergency repair services</li></ul><h3>Operations Management</h3><p>Efficient operations management ensures smooth traffic flow and optimal user experience:</p><ul><li>Toll collection system operation</li><li>Traffic monitoring and management</li><li>Incident response and management</li><li>Customer service and support</li><li>Performance monitoring and reporting</li><li>Revenue collection and management</li></ul><h3>Technology Solutions</h3><p>We employ advanced technology to enhance maintenance efficiency and operational effectiveness:</p><ul><li>Automated toll collection systems</li><li>Traffic monitoring and control systems</li><li>Predictive maintenance technologies</li><li>Asset management systems</li><li>Customer relationship management (CRM) systems</li></ul>',
                'icon' => 'maintenance',
                'is_published' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'Environmental Consulting',
                'slug' => 'environmental-consulting',
                'description' => 'Specialized environmental consulting services including impact assessments, mitigation strategies, and sustainable development planning for infrastructure projects.',
                'content' => '<h2>Environmental Consulting</h2><p>Environmental responsibility is at the core of our infrastructure development approach. Our environmental consulting services help ensure that toll road projects are developed sustainably, with minimal environmental impact and maximum benefit to local communities.</p><h3>Environmental Assessment Services</h3><ul><li>Environmental impact assessments (EIA)</li><li>Biodiversity and habitat assessments</li><li>Water quality and hydrology studies</li><li>Air quality monitoring and assessment</li><li>Noise impact assessments</li><li>Soil and contamination studies</li></ul><h3>Mitigation and Management</h3><p>We develop and implement comprehensive environmental management plans:</p><ul><li>Environmental mitigation strategies</li><li>Habitat restoration and enhancement</li><li>Water management and treatment systems</li><li>Waste reduction and recycling programs</li><li>Erosion and sediment control</li><li>Environmental monitoring programs</li></ul><h3>Sustainable Development</h3><p>Our commitment to sustainability extends throughout the project lifecycle:</p><ul><li>Green construction practices</li><li>Energy-efficient design solutions</li><li>Sustainable material selection</li><li>Carbon footprint reduction strategies</li><li>Community engagement and consultation</li><li>Long-term environmental stewardship</li></ul>',
                'icon' => 'environment',
                'is_published' => true,
                'sort_order' => 5,
            ],
        ];

        foreach ($services as $serviceData) {
            Service::create($serviceData);
        }
    }
}