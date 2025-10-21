import HomePageSchema from './schemas/homePageSchema'
import OurStoryPageSchema from './schemas/ourStoryPageSchema'
import OurProcessPageSchema from './schemas/ourProcessPageSchema'
import ImpactSustainabilityPageSchema from './schemas/impactSustainabilityPageSchema'
import WholesalePartnershipsPageSchema from './schemas/wholesalePartnershipsPageSchema'
import ContactPageSchema from './schemas/contactPageSchema'
import ContactConnectPageSchema from './schemas/contactConnectPageSchema'
import BlogPageSchema from './schemas/blogPageSchema'
import BlogPostSchema from './schemas/blogPostSchema'
import BlogCategorySchema from './schemas/blogCategorySchema'
import TermsPageSchema from './schemas/termsPageSchema'

import CtaObject from './schemas/objects/cta'
import PortableTextObject from './schemas/objects/portableText'
import FormFieldObject from './schemas/objects/formField'
import FormSectionObject from './schemas/objects/formSection'

export const schema = {
  types: [
    HomePageSchema,
    OurStoryPageSchema,
    OurProcessPageSchema,
    ImpactSustainabilityPageSchema,
    WholesalePartnershipsPageSchema,
    ContactPageSchema,
    ContactConnectPageSchema,
    BlogPageSchema,
    BlogPostSchema,
    BlogCategorySchema,
    TermsPageSchema,
    PortableTextObject,
    CtaObject,
    FormFieldObject,
    FormSectionObject,
  ],
}
