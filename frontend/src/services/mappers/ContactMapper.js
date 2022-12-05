class ContactMapper {
  toPersistemce(domainContact) {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  // toDomain(persistemceContact){
  //   return{}
  // }
}

export default ContactMapper;
