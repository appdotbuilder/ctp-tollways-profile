<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            [
                'title' => 'About PT CTP Tollways',
                'slug' => 'about',
                'content' => '<h2>About PT CTP Tollways</h2><p>PT CTP Tollways is a leading infrastructure development company specializing in toll road construction and management across Indonesia. With over two decades of experience, we have been instrumental in developing critical transportation infrastructure that connects communities and drives economic growth.</p><h3>Our Mission</h3><p>To build world-class toll road infrastructure that enhances connectivity, promotes economic development, and improves the quality of life for Indonesian communities.</p><h3>Our Vision</h3><p>To be the premier toll road developer in Indonesia, known for excellence in construction, innovation in design, and commitment to sustainability.</p><h3>Core Values</h3><ul><li><strong>Excellence</strong> - We strive for the highest standards in all our projects</li><li><strong>Innovation</strong> - We embrace new technologies and methodologies</li><li><strong>Sustainability</strong> - We are committed to environmentally responsible development</li><li><strong>Integrity</strong> - We conduct business with honesty and transparency</li><li><strong>Partnership</strong> - We build strong relationships with stakeholders</li></ul>',
                'excerpt' => 'PT CTP Tollways is a leading infrastructure development company specializing in toll road construction and management across Indonesia.',
                'meta_title' => 'About PT CTP Tollways - Leading Toll Road Infrastructure Developer',
                'meta_description' => 'Learn about PT CTP Tollways, Indonesia\'s premier toll road development company with over 20 years of experience in infrastructure construction.',
                'is_published' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Company Profile',
                'slug' => 'profile',
                'content' => '<h2>Company Profile</h2><p>PT CTP Tollways was established in 2002 with the vision of transforming Indonesia\'s transportation landscape through world-class toll road infrastructure. Our headquarters is located in Jakarta, with regional offices across major cities in Indonesia.</p><h3>Key Statistics</h3><ul><li>Founded: 2002</li><li>Headquarters: Jakarta, Indonesia</li><li>Total Projects: 50+ completed</li><li>Road Length: 2,000+ kilometers constructed</li><li>Employees: 1,500+ professionals</li><li>Service Areas: Java, Sumatra, Kalimantan, Sulawesi</li></ul><h3>Leadership Team</h3><p>Our experienced leadership team brings together decades of expertise in infrastructure development, project management, and engineering excellence. Under their guidance, PT CTP Tollways has successfully delivered numerous landmark projects that have significantly improved Indonesia\'s transportation network.</p><h3>Certifications & Awards</h3><ul><li>ISO 9001:2015 Quality Management System</li><li>ISO 14001:2015 Environmental Management System</li><li>ISO 45001:2018 Occupational Health and Safety Management</li><li>Infrastructure Excellence Award 2023</li><li>Best Toll Road Developer 2022</li></ul>',
                'excerpt' => 'Established in 2002, PT CTP Tollways has grown to become one of Indonesia\'s most trusted toll road infrastructure developers.',
                'meta_title' => 'PT CTP Tollways Company Profile - Infrastructure Development Excellence',
                'meta_description' => 'Discover PT CTP Tollways company profile, history, achievements, and our commitment to excellence in toll road infrastructure development.',
                'is_published' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Safety & Quality Standards',
                'slug' => 'safety-quality',
                'content' => '<h2>Safety & Quality Standards</h2><p>At PT CTP Tollways, safety and quality are not just priorities—they are fundamental to everything we do. We maintain the highest international standards to ensure the safety of our workers, the public, and the long-term quality of our infrastructure.</p><h3>Safety Management</h3><ul><li>Zero-accident workplace policy</li><li>Comprehensive safety training programs</li><li>Regular safety audits and inspections</li><li>Emergency response protocols</li><li>Personal protective equipment (PPE) requirements</li></ul><h3>Quality Assurance</h3><ul><li>Rigorous material testing and inspection</li><li>Advanced construction monitoring systems</li><li>Third-party quality verification</li><li>Continuous improvement processes</li><li>Post-construction monitoring and maintenance</li></ul><h3>Environmental Responsibility</h3><p>We are committed to sustainable development practices that minimize environmental impact while maximizing social benefits. Our environmental management includes:</p><ul><li>Environmental impact assessments</li><li>Waste reduction and recycling programs</li><li>Water and air quality monitoring</li><li>Biodiversity conservation efforts</li><li>Community engagement and consultation</li></ul>',
                'excerpt' => 'Our commitment to safety and quality ensures world-class toll road infrastructure that meets international standards.',
                'meta_title' => 'Safety & Quality Standards - PT CTP Tollways',
                'meta_description' => 'Learn about PT CTP Tollways\' commitment to safety, quality standards, and environmental responsibility in toll road construction.',
                'is_published' => true,
                'sort_order' => 3,
            ],
        ];

        foreach ($pages as $pageData) {
            Page::create($pageData);
        }
    }
}